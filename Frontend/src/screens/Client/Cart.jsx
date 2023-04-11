import React, {useEffect, useState} from 'react';
import {View, FlatList, Image, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppButton1 from '../../components/AppButton1';
import AppText from '../../components/AppText';
import CartComponent from '../../components/CartComponent';
import HeaderType from '../../components/HeaderType';
import IconInput from '../../components/IconInput';
import SimpleInput from '../../components/SimpleInput';
import color from '../../config/color';
import {setCart} from '../../store/action';
const datad = [
  {
    name: 'Apple',
    price: '200',
    value: '1',
    _id: '1',
  },
  {
    name: 'Apple',
    price: '200',
    value: '1',
    _id: '2',
  },
  {
    name: 'Apple',
    price: '200',
    value: '1',
    _id: '3',
  },
  {
    name: 'Apple',
    price: '200',
    value: '1',
    _id: '4',
  },
  {
    name: 'Apple',
    price: '200',
    value: '1',
    _id: '5',
  },
];
const Cart = () => {
  const [num, setNum] = useState(0);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(datad);
  const [totals, setTotal] = useState('');
  const myData = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart(datad));
    console.log('myData', myData);
  }, []);
  // Add
  const Plus = id => {
    // console.log(myData[0]);
    let price = '';
    for (i = 0; i < myData.length; i++) {
      if (myData[i]._id === id) {
        price = myData[i].price;
      }
    }

    console.log('new data', data);
    console.log('new data', price);
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === id) {
        if (data[i].value >= 1) {
          data[i].value = +data[i].value + 1;
          data[i].price = +data[i].price + +price;
        } else {
          return;
        }
        break;
      }
    }
    setUpdate(!update);
  };
  // Subtract
  const Minus = id => {
    let price = '';
    for (i = 0; i < myData.length; i++) {
      if (myData[i]._id === id) {
        price = myData[i].price;
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === id) {
        if (data[i].value <= 1) {
          return;
        } else {
          data[i].value = +data[i].value - 1;
          data[i].price = +data[i].price - +price;
        }
        break;
      }
    }
    setUpdate(!update);
    console.log('data', data);
  };
  // Total
  const total = data.reduce((accumulator, currentValue) => {
    return +accumulator + +currentValue.price;
  }, 0);

  console.log(total);
  return (
    <View style={styles.container}>
      {/* profile image */}
      <View style={styles.ImageContainer}>
        <Image
          source={require('../../assets/images/Ellipse.jpg')}
          style={{height: 50, width: 50}}
        />
      </View>
      {/* Bin Heading */}
      <HeaderType
        heading="Shopping Cart"
        iconName="trash"
        iconStyle={styles.icon}
        style={styles.Header2}
      />
      {/* orders */}
      <View style={styles.orders}>
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <CartComponent
              name={item.name}
              price={item.price}
              onPlus={() => {
                Plus(item._id);
              }}
              onMinus={() => {
                Minus(item._id);
              }}
              value={item.value}
            />
          )}
        />
      </View>
      {/* sepretor */}
      <View style={styles.line} />
      {/* Total Price */}
      <View style={styles.totalContainer}>
        <AppText style={styles.total}>Total</AppText>
        <AppText style={styles.price}>Pkr {total}</AppText>
      </View>
      {/* info inpts */}
      <ScrollView>
        <View>
          <IconInput placeholder="Full Name" styleContainer={styles.inputs} />
          <IconInput placeholder="Email" styleContainer={styles.inputs} />
          <IconInput
            placeholder="Phone Number"
            styleContainer={styles.inputs}
          />
          <IconInput
            placeholder="Shipping Address"
            styleContainer={styles.inputs}
          />
        </View>
        {/* Place order */}
        <View style={styles.Button}>
          <AppButton1 title="Place Order" />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    paddingHorizontal: '2%',
  },
  ImageContainer: {
    marginTop: '5%',
    alignItems: 'flex-end',
  },
  icon: {
    color: color.danger,
  },
  orders: {
    // paddingHorizontal: 3,
    height: '40%',
    marginTop: '5%',
    // borderWidth: 3,
  },
  Header2: {
    marginVertical: '3%',
    marginTop: '3%',
  },
  line: {
    height: 2,
    marginTop: '10%',
    borderWidth: 1.2,
    borderColor: color.grey2,
  },
  totalContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    color: color.black,
    fontWeight: '700',
    fontSize: 15,
  },
  price: {
    color: color.green,
    fontWeight: '700',
    fontSize: 15,
  },
  inputs: {
    marginTop: '5%',
  },
  Button: {
    marginVertical: '6%',
    // marginBottom: '50%',
  },
});
export default Cart;
