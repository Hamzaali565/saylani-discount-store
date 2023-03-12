import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import color from '../config/color';
import AppText from './AppText';

const Header = ({iconStyle, BackButton, onPress, onpressOrder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.threeData}>
        {/* Button */}
        <TouchableOpacity onPress={onPress}>
          {BackButton && (
            <FontAwesome5
              style={[{color: color.grey, fontSize: 35}, iconStyle]}
              name={BackButton}
            />
          )}
        </TouchableOpacity>
        {/* Avatar */}
        <View style={styles.Image}>
          <Image source={require('../assets/images/Ellipse.jpg')} />
        </View>
        {/* Name & Position */}
        <View>
          <AppText style={styles.text1}>Muhammad Hamza</AppText>
          <AppText style={styles.text2}>Admin</AppText>
        </View>
      </View>
      {/*  */}
      <TouchableOpacity onPress={onpressOrder}>
        <FontAwesome5
          style={[{color: color.grey, fontSize: 30}, iconStyle]}
          name="book"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '1.3%',
    paddingHorizontal: '1%',
    borderBottomWidth: 2,
    borderColor: color.grey,
  },
  threeData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: {
    paddingHorizontal: 5,
  },
  text1: {
    color: color.blue,
    fontWeight: '600',
    fontSize: 17,
  },
  text2: {
    color: color.green,
    fontWeight: '600',
    fontSize: 17,
  },
});
export default Header;
