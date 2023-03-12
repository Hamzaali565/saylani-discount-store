import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import color from '../config/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CategoryInput = ({title, fontStyle, style, onClick, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onClick={onClick}>
      <View style={styles.category}>
        <Text style={[{color: color.grey2}, textStyle]}>
          {!title ? 'Category' : title}
        </Text>
        <FontAwesome5
          style={[{color: color.grey2, fontSize: 30}, fontStyle]}
          name="chevron-down"
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
  },
  category: {
    backgroundColor: color.BackGrey,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
export default CategoryInput;
