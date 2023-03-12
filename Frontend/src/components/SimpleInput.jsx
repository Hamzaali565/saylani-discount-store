import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import color from '../config/color';

const SimpleInput = ({
  placeholder,
  onChangeText,
  style,
  inputStyle,
  keyboardType,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        // numberOfLines={4}
        // textBreakStrategy={'balanced'}
        keyboardType={keyboardType}
        placeholderTextColor={color.grey2}
        style={[styles.input, inputStyle]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BackGrey,
    borderRadius: 10,
    marginTop: '5%',
  },
  input: {
    paddingHorizontal: 10,
    color: color.black,
  },
});
export default SimpleInput;
