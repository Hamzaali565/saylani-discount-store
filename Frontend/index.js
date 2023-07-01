/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/store/store';

const Apps = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Apps);

// const AppWrapper = () => {
//   const store = createStore(rootReducer);

//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };
