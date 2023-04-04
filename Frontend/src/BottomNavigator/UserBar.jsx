import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import User from '../Routes/User';
import Cart from '../screens/Client/Cart';
import MyOrder from '../screens/Client/MyOrder';

const Tab = createBottomTabNavigator();
const UserBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        // headerBackgroundContainerStyle: {backgroundColor: 'yellow'},
      }}>
      <Tab.Screen
        name="Home"
        component={User}
        options={{
          headerBackgroundContainerStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({size, color}) => (
            <FontAwesome5
              style={{color: color, fontSize: size}}
              name="house-user"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5
              style={{color: color, fontSize: size}}
              name="cart-plus"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={MyOrder}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 style={{color: color, fontSize: size}} name="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBar;
