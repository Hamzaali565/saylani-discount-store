import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/Routes/Auth';
import BottomBar from './src/BottomNavigator/BottomBar';
import NavTheme from './src/BottomNavigator/NavTheme';
import {createStore} from 'redux';
import mainReducer from './src/store/reducer';
import Render from './src/components/Render';
import Admin from './src/Routes/Admin';
import {setLogin} from './src/store/action';
import HomePage from './src/screens/Client/HomePage';
import AllProducts from './src/screens/Admin/AllProducts';
import HeaderType from './src/components/HeaderType';
import Cart from './src/screens/Client/Cart';
import MyOrder from './src/screens/Client/MyOrder';
import UserBar from './src/BottomNavigator/UserBar';
import axios from 'axios';
// const store = createStore(mainReducer);
const App = () => {
  const admin = useSelector(state => state.boolean);
  const login = useSelector(state => state.login);
  const url = useSelector(state => state.url);
  const token = useSelector(state => state.token);
  const Dispatch = useDispatch();
  console.log('====================================');
  console.log(admin);
  console.log('====================================');
  // const disp = useDispatch();
  useEffect(() => {
    // Dispatch(setLogin(false));
    AllProducts();
  }, []);
  console.log(login);
  const AllProducts = async () => {
    try {
      let response = await axios.get(`${url}/api/v1/products`, {
        headers: {
          Cookie: `Token=${token}`,
        },
      });
      console.log('response', response.data.data);
      Dispatch(setLogin(true));
    } catch (error) {
      console.log('error', error);
      Dispatch(setLogin(false));
    }
  };
  return (
    // <Provider store={store}>
    <NavigationContainer theme={NavTheme}>
      <View
        style={{
          flex: 1,
        }}>
        {/* {admin == true ? <BottomBar /> : <Auth />} */}
        {login === true && admin === true ? <BottomBar /> : null}
        {login === true && admin === false ? <UserBar /> : null}
        {login === false ? <Auth /> : null}
        {/* <HomePage /> */}
        {/* <Cart /> */}
        {/* <MyOrder /> */}
        {/* <UserBar /> */}
        {/* <HeaderType /> */}
      </View>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
