import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllProducts from '../screens/Admin/AllProducts';
import AddNewItem from '../screens/Admin/AddNewItem';
// import Order from '../screens/Admin/Orders';
import Setting from '../screens/Admin/Settings';
import color from '../config/color';
import {Image} from 'react-native';
import Settings from '../screens/Admin/Settings';
import Orders from '../screens/Admin/Orders';
import Header from '../components/Header';
import BottomBar from '../BottomNavigator/BottomBar';
const Admin = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Page1"
        // options={{headerShown: false}}
        component={AllProducts}
      />
      {/* <Stack.Screen name="addNew" component={AddNewItem} /> */}
      {/* <Stack.Screen name="orderDetails" component={Orders} /> */}
      <Stack.Screen name="settings" component={Settings} />
      {/* <Stack.Screen name="Tab" component={BottomBar} /> */}
    </Stack.Navigator>
  );
};

export default Admin;
