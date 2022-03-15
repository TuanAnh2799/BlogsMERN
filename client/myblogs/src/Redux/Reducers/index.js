import { combineReducers } from "redux"
import postReducer from "./posts";


const reducer = combineReducers({
    postStore: postReducer,
});

export default (state, action) => reducer(state,action);