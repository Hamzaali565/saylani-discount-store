import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
// import Counter from './src/components/Counter';
// import File from './src/components/File';
import File from './src/components/File';
import Login from './src/screens/Auth/Login';
import {store} from './src/store/store';
const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        // alignItems: 'center',
        flex: 1,
      }}>
      <Provider store={store}>
        {/* <File /> */}
        <Login />
      </Provider>
    </View>
  );
};

export default App;
