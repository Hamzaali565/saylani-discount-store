import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import AppButton1 from '../../components/AppButton1';
import AppText from '../../components/AppText';
import IconInput from '../../components/IconInput';
import color from '../../config/color';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setToken, setAdmin, setLogin, setObject} from '../../store/action';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordState, setPasswordState] = useState(false);
  const Dispatch = useDispatch();
  const myobj = useSelector(state => state.object);
  const admin = useSelector(state => state.boolean);
  const url = useSelector(state => state.url);
  const login = useSelector(state => state.login);
  useEffect(() => {
    console.log('data', url);
    console.log('LOGIN', login);
  }, []);

  const Move = async () => {
    console.log('====================================');
    console.log('my', myobj);
    console.log('Admin', admin);
    console.log('====================================');
    try {
      let response = await axios.post(
        `${url}/api/v1/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        },
      );
      console.log(response.data.profile);
      Dispatch(setObject(response.data.profile));
      Dispatch(setAdmin(response.data.profile.admin));
      Dispatch(setLogin(true));
      Dispatch(setToken(response.data.profile.token));
      console.log('response.data.profile.token', response.data.profile.token);
    } catch (err) {
      console.log(err);
    }
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
          onChangeText={text => {
            setEmail(text);
          }}
          // styleContainer={{marginTop: 50}}
        />
        <IconInput
          placeholder="Password"
          iconName={!passwordState ? 'eye' : 'eye-slash'}
          iconStyle={{color: color.grey}}
          // keyboardType="email-address"
          secure={!passwordState ? true : false}
          onChangeText={text => {
            setPassword(text);
          }}
          onpress={() => {
            setPasswordState(!passwordState);
          }}
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
