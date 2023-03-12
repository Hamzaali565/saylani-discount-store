import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Counter from '../../components/Counter';
import AppText from '../../components/AppText';
import color from '../../config/color';
import AppButton1 from '../../components/AppButton1';
const GetStarted = ({navigation}) => {
  const Move = () => {
    navigation.navigate('Login');
  };
  const call = text => {
    console.log('====================================');
    console.log(text);
    console.log('====================================');
  };
  return (
    <View style={style.container}>
      <View style={style.image}>
        <Image source={require('../../assets/images/Frame.jpg')} />
      </View>
      <View style={style.TextContainer}>
        <AppText
          onPress={text => {
            call(text);
          }}
          style={style.AppText}>
          SAYLANI WELFARE
        </AppText>
        <AppText style={style.AppText2}>ONLINE DISCOUNT STORE</AppText>
      </View>
      <View style={style.button}>
        <AppButton1 title="Get Started" onPress={Move} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    alignItems: 'center',
    marginTop: '40%',
  },
  AppText: {
    color: color.green,
    fontWeight: '700',
    fontSize: 38,
  },
  AppText2: {
    color: color.blue,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 25,
  },
  TextContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  button: {
    justifyContent: 'flex-end',
    // height: '100%',
    top: '30%',
    paddingHorizontal: '10%',
  },
});

export default GetStarted;
