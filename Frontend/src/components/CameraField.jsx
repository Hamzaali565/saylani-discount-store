import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import color from '../config/color';

const CameraField = ({onPress, style, fontStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {/* <AppText>Salim</AppText> */}
      <FontAwesome5
        style={[{color: color.grey, fontSize: 30}, fontStyle]}
        name="camera"
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BackGrey,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
});
export default CameraField;
