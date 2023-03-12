import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import AppButton1 from '../../components/AppButton1';
import AppText from '../../components/AppText';
import IconInput from '../../components/IconInput';
import color from '../../config/color';
const Login = ({navigation}) => {
  const Move = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.text1}>SAYLANI WELFARE</AppText>
        <AppText style={styles.text2}>ONLINE DISCOUNT STORE</AppText>
      </View>
      <View style={styles.fieldContainer}>
        <IconInput
          placeholder="Email"
          iconName="user-circle"
          iconStyle={{color: color.grey}}
          keyboardType="email-address"
          // styleContainer={{marginTop: 50}}
        />
        <IconInput
          placeholder="Password"
          iconName="eye-slash"
          iconStyle={{color: color.grey}}
          // keyboardType="email-address"
          secure={true}
        />
        <TouchableOpacity style={styles.forget}>
          <AppText style={styles.text3}>Forget Password?</AppText>
        </TouchableOpacity>
        <View style={styles.button}>
          <AppButton1 title="Sign In" onPress={Move} />
        </View>
        <TouchableOpacity style={styles.register}>
          <AppText style={styles.text4}>Don't have an account?Register</AppText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: '25%',
  },
  text1: {
    fontSize: 35,
    color: color.green,
    fontWeight: '700',
  },
  text2: {
    fontSize: 20,
    color: color.blue,
    fontWeight: '600',
  },
  text3: {
    color: color.blue,
    fontWeight: '700',
    fontSize: 15,
  },
  text4: {
    color: color.blue,
    fontWeight: '700',
    fontSize: 15,
  },
  forget: {
    marginTop: 20,
    color: color.blue,
  },
  fieldContainer: {
    marginTop: '20%',
    paddingHorizontal: '10%',
  },
  button: {
    // paddingHorizontal: '10%',
    marginTop: '20%',
  },
  register: {
    marginTop: '5%',
    // fontSize: 15,
  },
});
export default Login;
