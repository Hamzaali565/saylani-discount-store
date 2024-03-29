import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import color from '../config/color';
import AppButton1 from './AppButton1';
import AppText from './AppText';
const AllProductsComponent = ({
  productImage,
  productName,
  productWeight,
  productPrice,
}) => {
  return (
    <View style={styles.container}>
      {/* Image and name/kg */}
      <View style={styles.container2}>
        {/* image */}
        <View>
          <Image
            // source={ur({productImage})}
            source={{uri: productImage}}
            style={{height: 90, width: 120, resizeMode: 'contain'}}
          />
        </View>
        {/* Name/kg */}
        <View style={styles.textContainer}>
          <AppText style={styles.AppText1}>{productName}</AppText>
          {productWeight && (
            <AppText style={styles.AppText2}>1. {productWeight}</AppText>
          )}
        </View>
      </View>
      {/* =============== */}
      {/* price */}
      <View>
        {productPrice && (
          <AppText style={styles.AppText3}>Pkr {productPrice}</AppText>
        )}
      </View>
    </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.green,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 20,
    marginTop: '10%',
    marginBottom: 10,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    paddingLeft: 10,
  },
  AppText1: {
    color: color.green,
    fontWeight: '600',
    fontSize: 20,
  },
  AppText2: {
    color: color.grey2,
    fontWeight: '600',
    fontSize: 20,
  },
  AppText3: {
    color: color.grey2,
    fontWeight: '600',
    fontSize: 20,
  },
});
export default AllProductsComponent;
