import axios from 'axios';
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import AppButton1 from '../../components/AppButton1';
import AppText from '../../components/AppText';
import IconInput from '../../components/IconInput';
import color from '../../config/color';
const SignUP = ({navigation}) => {
  const url = useSelector(state => state.url);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  // SignUP Api
  const CreateAccount = async () => {
    try {
      let response = await axios.post(`${url}/api/v1/signup`, {
        email,
        password,
        contact,
        fullName,
      });
      console.log('response', response);
      navigation.navigate('login', {email, password});
    } catch (error) {
      console.log('error', error);
    }
  };

  // const CreateAccount = () => {
  //   navigation.navigate('Login', {email, password});
  // };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.text1}>SAYLANI WELFARE</AppText>
        <AppText style={styles.text2}>ONLINE DISCOUNT STORE</AppText>
      </View>
      <View style={styles.fieldContainer}>
        <IconInput
          placeholder="Full Name"
          iconName="user-circle"
          iconStyle={{color: color.grey}}
          onChangeText={text => {
            setFullName(text);
          }}
          // keyboardType="email-address"
          // styleContainer={{marginTop: 50}}
        />
        <IconInput
          placeholder="Contact"
          iconName="mobile-alt"
          iconStyle={{color: color.grey}}
          keyboardType="decimal-pad"
          onChangeText={text => {
            setContact(text);
          }}
        />
        <IconInput
          placeholder="Email"
          iconName="mail-bulk"
          iconStyle={{color: color.grey}}
          keyboardType="email-address"
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <IconInput
          placeholder="Password"
          iconName="eye-slash"
          onChangeText={text => {
            setPassword(text);
          }}
          iconStyle={{color: color.grey}}
          //   secure={true}
        />

        <View style={styles.button}>
          <AppButton1 title="Sign Up" onPress={CreateAccount} />
        </View>
        <TouchableOpacity style={styles.register}>
          <AppText style={styles.text4}>Don't have an account?Register</AppText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  textContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    // flex: 1,
    marginTop: '30%',
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
export default SignUP;
