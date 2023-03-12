import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
// import Counter from './src/components/Counter';
// import File from './src/components/File';
import File from './src/components/File';
import GetStarted from './src/screens/Auth/GetStarted';
import Login from './src/screens/Auth/Login';
import SignUP from './src/screens/Auth/Singup';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/Routes/Auth';
import Admin from './src/Routes/Admin';
import Header from './src/components/Header';
import AllProductsComponent from './src/components/AllProductsComponent';
import CameraField from './src/components/CameraField';
import SimpleInput from './src/components/SimpleInput';
import CategoryInput from './src/components/CategoryInput';
const App = () => {
  return (
    <NavigationContainer theme={{colors: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          // alignItems: 'center',
          flex: 1,
        }}>
        <Provider store={store}>
          {/* <AllProductsComponent /> */}
          {/* <Auth /> */}
          <Admin />
          {/* <CategoryInput /> */}
          {/* <SimpleInput /> */}
          {/* <CameraField /> */}
          {/* <Header /> */}
          {/* <File /> */}
          {/* <GetStarted /> */}
          {/* <Login /> */}
          {/* <SignUP /> */}
        </Provider>
      </View>
    </NavigationContainer>
  );
};

export default App;
