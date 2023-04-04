import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import color from '../config/color';
import AppText from './AppText';
import SimpleInput from './SimpleInput';
const CartComponent = ({
  name,
  price,
  onChangeText,
  onMinus,
  onPlus,
  value,
  image,
}) => {
  return (
    <View style={styles.container}>
      {/* image container */}
      <View style={styles.ImageContainer}>
        <Image
          source={{uri: image}}
          style={{height: 100, width: 100, resizeMode: 'contain'}}
        />
      </View>
      {/* other than image container */}
      <View style={styles.countItPriceContainer}>
        {/* item Name and Count */}
        <View style={styles.countItContainer}>
          <AppText style={styles.ItemName}>{name}</AppText>
          {/* counter */}
          <View style={styles.counter}>
            <AppText style={styles.symbol} onPress={onMinus}>
              -
            </AppText>
            {/* <SimpleInput
              style={styles.input}
              placeholder="0"
              maxLength={2}
              value={value}
              onChangeText={onChangeText}
              keyboardType="numeric"
              inputStyle={{textAlign: 'center'}}
            /> */}
            <AppText style={styles.value}>{value}</AppText>
            <AppText style={styles.symbol} onPress={onPlus}>
              +
            </AppText>
          </View>
        </View>
        {/* price */}
        <View>
          <AppText style={styles.price}>Pkr {price}</AppText>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: '2%',
    borderColor: color.green,
    // alignItems: 'center',
    // paddingHorizontal: '5%',
  },
  value: {
    textAlign: 'center',
    marginTop: 0,
    width: '33%',
    marginHorizontal: '4%',
    backgroundColor: color.BackGrey,
    borderRadius: 5,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  symbol: {
    fontSize: 30,
    fontWeight: '600',
  },
  ItemName: {
    fontSize: 16,
    fontWeight: '700',
  },
  countItPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 2,
    width: '74%',
    // paddingLeft: '3%',
  },
  countItContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontWeight: '700',
    fontSize: 15,
  },
});
export default CartComponent;
