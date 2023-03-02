import React, {Children} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppText = ({children, onPress, style, ...otherProps}) => {
  return (
    <Text style={[styles.content, style]} onPress={onPress} {...otherProps}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  content: {
    // backgroundColor: 'black',
    color: 'black',
  },
});
export default AppText;
