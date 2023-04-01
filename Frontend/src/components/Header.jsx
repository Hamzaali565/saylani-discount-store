import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import color from '../config/color';
import AppText from './AppText';

const Header = ({iconStyle, BackButton, onPress, onpressOrder, navigation}) => {
  const myobj = useSelector(state => state.object);
  const navigate = useNavigation();
  const Move = () => {
    navigate.navigate('settings');
  };
  return (
    <View style={styles.container}>
      <View style={styles.threeData}>
        {/* Button */}
        <TouchableOpacity onPress={Move}>
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
          <AppText style={styles.text1}>{myobj?.fullName}</AppText>
          {myobj?.admin ? <AppText style={styles.text2}>Admin</AppText> : null}
        </View>
      </View>
      {/*  */}
      <TouchableOpacity onPress={Move}>
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
