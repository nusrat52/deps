import { loginReducer } from "./reducer";
import { bucket } from "./bucket";
import { categories } from "./categories";
import { combineReducers } from 'redux';

export  const reducerMain=combineReducers({loginReducer, bucket, categories})