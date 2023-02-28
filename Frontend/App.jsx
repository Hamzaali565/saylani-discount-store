import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './src/component/Counter';
import File from './src/component/File';
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
        <File />
      </Provider>
    </View>
  );
};

export default App;
