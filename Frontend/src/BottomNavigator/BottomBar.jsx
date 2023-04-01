import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabActions} from '@react-navigation/native';
import AllProducts from '../screens/Admin/AllProducts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Orders from '../screens/Admin/Orders';
import AddNewItem from '../screens/Admin/AddNewItem';
import Settings from '../screens/Admin/Settings';
import Admin from '../Routes/Admin';

const Tab = createBottomTabNavigator();
const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // headerBackgroundContainerStyle: {backgroundColor: 'yellow'},
      }}>
      <Tab.Screen
        name="Home"
        component={Admin}
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
        name="Add Items"
        component={AddNewItem}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 style={{color: color, fontSize: size}} name="plus" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Orders}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 style={{color: color, fontSize: size}} name="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
