import React from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import color from '../config/color';
import AppText from './AppText';

const AppButton1 = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AppText style={[styles.text, textStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '40%',
    padding: 20,
    borderRadius: 15,
  },
  text: {
    color: color.white,
    fontSize: 30,
  },
});
export default AppButton1;
