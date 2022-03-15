import React from 'react'
import { LogBox } from 'react-native';
import Route from './src/Navigation/index';
import {Provider} from 'react-redux'
import { store } from './src/Redux/Store/index';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

export default App