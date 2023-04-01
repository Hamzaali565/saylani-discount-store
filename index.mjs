import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { stringToHash, varifyHash } from "bcrypt-inzi";
import jwt from "jsonwebtoken";
import { boolean } from "webidl-conversions";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://192.168.3.105:8081"],
    credentials: true,
  })
);

const SECRET = process.env.SECRET || "topsecret";

// ---UserSchema---//
const userSchema = new mongoose.Schema({
  fullName: { type: String },
  contact: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  admin: { type: Boolean, default: false },
});
export const userModel = mongoose.model("SaylaniUser", userSchema);
//
// ---Add Product Api ---//
const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  unitName: { type: String, required: true },
  unitPrice: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});
const productModel = mongoose.model("product", productSchema);
//--Category Api --//
const categorySchema = new mongoose.Schema({
  image: { type: String, required: true },
  categoryName: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});
const categoryModel = mongoose.model("category", categorySchema);
// ---Costumer Order Api--//
const costumerOrderSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  status: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
});
const costumerOrderModel = mongoose.model("OrderSchema", costumerOrderSchema);
// --------user SignUP 1--------//
app.post("/api/v1/signup", (req, res) => {
  let body = req.body;

  if (!body.fullName || !body.email || !body.contact || !body.password) {
    res.status(400).send({ message: "All Fields are Required" });
    return;
  }

  req.body.email = req.body.email.toLowerCase();

  // check if user already exist // query email user
  userModel.findOne({ email: body.email }, (err, user) => {
    if (!err) {
      console.log("user: ", user);

      if (user) {
        // user already exist
        console.log("user already exist: ", user);
        res
          .status(400)
          .send({ message: "user already exist please try a different email" });
        return;
      } else {
        // user not already exist

        // bcrypt hash
        stringToHash(body.password).then((hashString) => {
          userModel.create(
            {
              fullName: body.fullName,
              email: body.email,
              password: hashString,
              contact: body.contact,
            },
            (err, result) => {
              if (!err) {
                console.log("data saved: ", result);
                res.status(201).send({ message: "user is created" });
              } else {
                console.log("db error: ", err);
                res
                  .status(500)
                  .send({ message: "User Not Created. Please try again" });
              }
            }
          );
        });
      }
    } else {
      console.log("db error: ", err);
      res.status(500).send({ message: "db error in query" });
      return;
    }
  });
});
// ---------------------------//

//----------user Login 2----------//
app.post("/api/v1/login", (req, res) => {
  let body = req.body;

  if (!body.email || !body.password) {
    // null check - undefined, "", 0 , false, null , NaN
    res.status(400).send({
      message: "All Fields are Required",
    });
    return;
  }

  body.email = body.email.toLowerCase();
  // check if user exist
  userModel.findOne(
    { email: body.email },
    "fullName email password contact admin",
    (err, data) => {
      if (!err) {
        console.log("data: ", data);

        if (data) {
          // user found
          varifyHash(body.password, data.password).then((isMatched) => {
            console.log("isMatched: ", isMatched);

            if (isMatched) {
              const token = jwt.sign(
                {
                  _id: data._id,
                  email: data.email,
                  iat: Math.floor(Date.now() / 1000) - 30,
                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                },
                SECRET
              );

              console.log("token: ", token);

              res.cookie("Token", token, {
                maxAge: 86_400_000,
                httpOnly: true,
                sameSite: "none",
                secure: true,
              });

              res.send({
                message: "login successful",
                profile: {
                  fullName: data.fullName,
                  email: data.email,
                  contact: data.contact,
                  _id: data._id,
                  admin: data.admin,
                },
              });
              return;
            } else {
              console.log("password did not match");
              res.status(401).send({ message: "Incorrect email or password" });
              return;
            }
          });
        } else {
          // user not already exist
          console.log("user not found");
          res.status(401).send({ message: "Incorrect email or password" });
          return;
        }
      } else {
        console.log("db error: ", err);
        res.status(500).send({ message: "login failed, please try later" });
        return;
      }
    }
  );
});
//-----------------------------------//

///----------------LOGOUT API 3--------//
app.post("/api/v1/logout", (req, res) => {
  res.cookie("Token", "", {
    maxAge: 1,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.send({ message: "Logout successful" });
});

//-----------------------------------------//
//----- ADD PRODUCT API (ADMIN) 4------///
app.post("/api/v1/product", (req, res) => {
  const body = req.body;

  if (
    // validation
    !body.image &&
    !body.itemName &&
    !body.category &&
    !body.description &&
    !body.unitName &&
    !body.unitPrice
  ) {
    res.status(400).send({
      message: "required parameters missing",
    });
    return;
  }
  productModel.create(
    {
      image: body.image,
      itemName: body.itemName,
      category: body.category,
      description: body.description,
      unitName: body.unitName,
      unitPrice: body.unitPrice,
      // owner: new mongoose.Types.ObjectId(body.token._id),
    },
    (err, saved) => {
      if (!err) {
        console.log(saved);

        res.send({
          message: "product added successfully",
          // data: data,
        });
      } else {
        console.log(err);
        res.status(500).send({
          message: "Product not Added. Please try later.",
        });
      }
    }
  );
});
//----///

//---- ADD CATEGORY API (ADMIN) 5---//
app.post("/api/v1/category", (req, res) => {
  const body = req.body;

  if (
    // validation
    !body.image &&
    !body.categoryName
  ) {
    res.status(400).send({
      message: "required parameters missing",
    });
    return;
  }
  categoryModel.create(
    {
      image: body.image,
      categoryName: body.categoryName,
      // owner: new mongoose.Types.ObjectId(body.token._id),
    },
    (err, saved) => {
      if (!err) {
        console.log(saved);

        res.send({
          message: "product added successfully",
          // data: data,
        });
      } else {
        console.log("err", err);
        res.status(500).send({
          message: "Product not Added. Please try later.",
        });
      }
    }
  );
});
//-----------//

//----- costumerOrderApi API (user) 6------///
app.post("/api/v1/order", (req, res) => {
  const body = req.body;

  if (
    // validation
    !body.ownerName &&
    !body.status &&
    !body.name &&
    !body.phoneNumber &&
    !body.address
  ) {
    res.status(400).send({
      message: "required parameters missing",
    });
    return;
  }
  costumerOrderModel.create(
    {
      ownerName: body.ownerName,
      status: body.status,
      name: body.name,
      phoneNumber: body.phoneNumber,
      address: body.address,
      // owner: new mongoose.Types.ObjectId(body.token._id),
    },
    (err, saved) => {
      if (!err) {
        console.log(saved);

        res.send({
          message: "product added successfully",
          // data: data,
        });
      } else {
        res.status(500).send({
          message: "Product not Added. Please try later.",
        });
      }
    }
  );
});
//---------------------------------------///

//------Get All Products Api's 7----------///
app.get("/api/v1/products", (req, res) => {
  // const userId = new mongoose.Types.ObjectId(req.body.token._id);
  productModel.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "got all products successfully",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});
//---------------------------------------//
//------Get Costumer Order Api's 8----------///
app.get("/api/v1/orders", (req, res) => {
  // const userId = new mongoose.Types.ObjectId(req.body.token._id);
  costumerOrderModel.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "got all orders successfully",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});
//---------------------------------------//
///------------Update UserName 9----------//
app.put("/api/v1/product/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  if (!body.fullName) {
    res.status(400).send({ message: "Required Parameters Are Missing" });
    return;
  }
  try {
    let data = await userModel
      .findByIdAndUpdate(
        id,
        {
          fullName: body.fullName,
        },
        // "fullName email contact admin",
        { new: true }
      )
      .exec();
    let joke = {
      fullName: data.fullName,
      contact: data.contact,
      email: data.email,
      _id: data._id,
      admin: data.admin,
    };
    console.log("updated: ", joke);
    res.send({
      message: "Name Updated Successfully",
      data: joke,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      message: "server error",
    });
  }
});
// -----------------------------------------------//
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./Frontend/build")));
app.use("*", express.static(path.join(__dirname, "./Frontend/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mongodbURI =
  process.env.mongodbURI ||
  "mongodb+srv://CRUD:hamzaali565@cluster0.kh990zg.mongodb.net/discountStore?retryWrites=true&w=majority";

/////////////////////////////////////////////////////////////////////////////////////////////////
mongoose.connect(mongodbURI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on("connected", function () {
  //connected
  console.log("Database is connected");
});

mongoose.connection.on("disconnected", function () {
  //disconnected
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  //any error
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  /////this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////
