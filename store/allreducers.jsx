import { loginReducer } from "./reducer";
import { bucket } from "./bucket";
import { categories } from "./categories";
import { combineReducers } from 'redux';
import {wishlistReducer} from "./wishlistReducer"

export  const reducerMain=combineReducers({loginReducer, bucket, categories, wishlistReducer})