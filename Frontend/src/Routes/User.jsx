import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/Client/HomePage';
import Cart from '../screens/Client/Cart';
import MyOrder from '../screens/Client/MyOrder';
const User = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomePage} />
      <Stack.Screen name="CartScreen" component={Cart} />
      <Stack.Screen name="OrderScreen" component={MyOrder} />
    </Stack.Navigator>
  );
};

export default User;
