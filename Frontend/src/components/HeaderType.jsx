import React from 'react';
import {ScrollView, View, TouchableOpacity, StyleSheet} from 'react-native';
import AppText from './AppText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import color from '../config/color';
import {useNavigation} from '@react-navigation/native';
const HeaderType = ({
  iconStyle,
  iconName,
  heading,
  subHeading,
  style,
  count,
}) => {
  let navigate = useNavigation();
  const Move = () => {
    navigate.navigate('CartScreen');
  };
  return (
    <View style={[styles.container, style]}>
      <View style={styles.ticon}>
        <View>
          <AppText style={styles.heading}>
            {heading ? heading : 'SAYLANI WELFARE'}
          </AppText>
          {subHeading && (
            <AppText style={styles.SubHeading}>{subHeading}</AppText>
          )}
        </View>
        {/* style={{flexDirection: 'row'}} */}
        <TouchableOpacity onPress={Move}>
          <FontAwesome5
            style={[{color: color.black, fontSize: 25}, iconStyle]}
            name={iconName}
          />
          {count && (
            <View style={styles.text1}>
              <AppText style={styles.text2}>{count}</AppText>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text1: {
    backgroundColor: 'red',
    width: 18,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    left: 18,
    bottom: 35,
  },
  text2: {
    color: color.white,
    fontWeight: '600',
  },
  container: {
    backgroundColor: 'white',
    marginTop: '2%',
    // flex: 1,
  },
  heading: {
    color: color.green,
    fontWeight: '700',
    fontSize: 23,
  },
  SubHeading: {
    color: color.blue,
    fontWeight: '600',
    fontSize: 12,
  },
  ticon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default HeaderType;
