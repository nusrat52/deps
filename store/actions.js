import * as actionType from "./actionTypes"
import axios from "axios";
 import * as Agent from "../api/agent"


export const login = (userData) => {
     return {
        type: actionType.LOGIN,
        payload:userData
    }
}



export const logout = () => {
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



 const getCategories = (categories) => {
    return {
        type: actionType.GET__CATEGORIES,
        payload:categories
      }
 }


 


export const addWishlist = (wishlistobject) => {
    return {
        type: actionType.ADD_WISHLIST,
        payload:wishlistobject
      }
 }





 export const deleteWishlist = (id) => {
    return {
        type: actionType.DELETE_WISHLIST,
        payload:id
      }
 }

export const getWishlist = () => {
      return {
        type: actionType.GET_WISHLIST,
       }
 }

const catMaker = async (dispatch) => {
     const categoriesResponse = await Agent.general.getCategories()
  
             dispatch(getCategories(categoriesResponse))
 
 }




 export const getCategory = () => {
     return async (dispatch) => {
       await catMaker(dispatch)
     };
  };