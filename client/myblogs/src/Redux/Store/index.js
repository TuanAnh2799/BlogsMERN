import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers/index'

const middleware = [ thunk ];

export const store = createStore(
    reducer,
    applyMiddleware(...middleware),
)