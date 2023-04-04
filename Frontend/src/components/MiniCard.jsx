import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import color from '../config/color';
import AppText from './AppText';
const MiniCard = ({source}) => {
  return (
    <View>
      <View style={{width: 150, height: 90}}>
        <Image
          source={require('../assets/images/1.jpg')}
          //   resizeMethod="scale"
          resizeMode="contain"
          style={{height: 100, width: 110, alignSelf: 'center'}}
        />
      </View>
      <AppText style={styles.text}>Grocery</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontWeight: '500',
    color: color.green,
  },
});
export default MiniCard;
