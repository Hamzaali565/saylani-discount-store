import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import color from '../config/color';
const HomeAllProductComponent = ({
  image,
  productName,
  price,
  weight,
  description,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image}}
          style={{height: 100, width: 100}}
          resizeMode="contain"
        />
      </View>
      {/* other than image container */}
      <View style={styles.container2}>
        {/* product name / price / weight */}
        <View style={styles.PPW}>
          <AppText style={styles.T1}>{productName}</AppText>
          <AppText style={styles.T1}>
            Rs.{price} - per {weight}
          </AppText>
        </View>
        {/* Description and add Button */}
        <View style={styles.descAdd}>
          <AppText style={styles.T3} numberOfLines={2}>
            {description}
          </AppText>
          <TouchableOpacity
            style={{
              //   borderWidth: 1,
              width: '10%',
              alignItems: 'center',
              backgroundColor: color.green,
              borderRadius: 10,
            }}
            onPress={onPress}>
            <FontAwesome5
              style={{color: color.white, fontSize: 30}}
              name="plus"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  PPW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  T1: {
    fontWeight: '700',
    fontSize: 12,
  },
  descAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  T3: {
    color: color.grey2,
    fontWeight: '400',
    fontSize: 15,
    // borderWidth: 1,
    width: '65%',
  },
  container2: {
    paddingHorizontal: '2%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: '5%',
  },
});
export default HomeAllProductComponent;
