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
// const store = createStore(mainReducer);
const App = () => {
  const admin = useSelector(state => state.boolean);
  const login = useSelector(state => state.login);
  const Dispatch = useDispatch();
  console.log('====================================');
  console.log(admin);
  console.log('====================================');
  // const disp = useDispatch();
  useEffect(() => {
    Dispatch(setLogin(false));
  }, []);
  console.log(login);

  return (
    // <Provider store={store}>
    <NavigationContainer theme={NavTheme}>
      <View
        style={{
          flex: 1,
        }}>
        {/* {admin == true ? <BottomBar /> : <Auth />} */}
        {login === true && admin === true ? <BottomBar /> : null}
        {login === false ? <Auth /> : null}
      </View>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
