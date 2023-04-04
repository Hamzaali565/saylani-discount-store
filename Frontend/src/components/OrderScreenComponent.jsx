import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import color from '../config/color';
import AppText from './AppText';
import CategoryInput from './CategoryInput';
const OrderScreenComponent = ({
  onPress,
  ownerName,
  orderTime,
  status,
  phoneNumber,
  price,
  title,
}) => {
  return (
    <View style={styles.contaier}>
      {/* owner name */}
      <AppText style={styles.OwnerName}>{ownerName}</AppText>
      {/* Time-status-number */}
      <View style={styles.tsnContainer}>
        <View style={styles.timeStatusContainer}>
          <AppText style={styles.time}>{orderTime} - </AppText>
          <AppText style={styles.status}>{status}</AppText>
        </View>
        <AppText style={styles.number}>{phoneNumber}</AppText>
      </View>
      {/* Total */}
      <View style={styles.totalPriceContainer}>
        <AppText style={styles.total}>Total</AppText>
        <AppText style={styles.Price}>Pkr {price}</AppText>
      </View>
      {/* Update status */}
      {title && (
        <View style={styles.updateStatus}>
          <CategoryInput onPress={onPress} title={title} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  contaier: {
    paddingHorizontal: 10,
  },
  OwnerName: {
    fontWeight: '400',
    fontSize: 20,
  },
  tsnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeStatusContainer: {
    flexDirection: 'row',
  },
  time: {
    fontSize: 10,
    fontWeight: '400',
  },
  number: {
    fontSize: 10,
    fontWeight: '400',
  },
  status: {
    fontSize: 10,
    fontWeight: '400',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  total: {
    fontSize: 15,
    fontWeight: '600',
  },
  Price: {
    fontSize: 15,
    fontWeight: '600',
    color: color.green,
  },
  updateStatus: {
    marginTop: 10,
  },
});
export default OrderScreenComponent;
