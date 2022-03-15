
import React from 'react'
import { LogBox } from 'react-native';
import Route from './src/Navigation/index';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import reducer from './src/Redux/Reducers/index';
import mySaga from './src/Redux/Saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

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

