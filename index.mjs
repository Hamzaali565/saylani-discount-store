import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { stringToHash, varifyHash } from "bcrypt-inzi";
import jwt from "jsonwebtoken";
import { boolean } from "webidl-conversions";
import mongoose from "mongoose";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
  })
);

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
  cateegory: { type: String, required: true },
  description: { type: String },
  unitName: { type: String, required: true },
  unitPrice: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});
export const productModel = mongoose.model("product", productSchema);
//--Category Api --//
const categorySchema = new mongoose.Schema({
  image: { type: String, required: true },
  categoryName: { type: String, required: true },
});
export const categoryModel = mongoose.model("category", categorySchema);
// ---Costumer Order Api--//
const costumerOrderSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  status: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
});
export const costumerOrderModel = mongoose.model(
  "OrderSchema",
  costumerOrderSchema
);

console.log("fahad");

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