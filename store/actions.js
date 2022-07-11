import * as actionType from "./actionTypes"
import axios from "axios";
 import {Agent} from "../api/agent"


export const login = (userData) => {
     return {
        type: actionType.LOGIN,
        payload:userData
    }
}


export const logout = (userData) => {
    return {
       type: actionType.LOGOUT,
    }
}


export const addProduct = (data) => {
    return {
        type: actionType.ADD__PRODUCT,
        payload:data
    }
}


export const deleteProduct = (id) => {
    return {
        type: actionType.DELETE__PRODUCT,
        payload:id
    }
}
 
export const checkout = () => {
    return {
        type: actionType.CHECKOUT,
     }
}

 

export const getItemsFromStorage = () => {
    return {
        type: actionType.GETITEMSFROMSTORAGE

     }
}


export const increaseItem = (id) => {
    return {
        type: actionType.INCREASEITEM,
        payload:id

     }
}
export const decreaseItem = (id) => {
    return {
        type: actionType.DECREASEITEM,
        payload:id
      }
}

