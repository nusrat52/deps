import { loginReducer } from "./reducer";
import { bucket } from "./bucket";
import { combineReducers } from 'redux';

export  const reducerMain=combineReducers({loginReducer, bucket})