import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import SignUP from '../screens/Auth/Singup';
import GetStarted from '../screens/Auth/GetStarted';
const Auth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUP} />
    </Stack.Navigator>
  );
};

export default Auth;
