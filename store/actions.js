import * as actionType from "./actionTypes"
import axios from "axios";
 import * as Agent from "../api/agent"


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



 const getCategories = (categories) => {
    return {
        type: actionType.GET__CATEGORIES,
        payload:categories
      }
 }



 export const getCategory = () => {
     return async (dispatch) => {
         const categories=[]
         const categoriesResponse = await Agent.general.getCategories()
            categories=categoriesResponse.results
         categoriesResponse.results.forEach(async (cat, index) => {
             const subCategories = await Agent.general.getChilds(cat.id)
             categories[index].childs = subCategories
             subCategories.forEach(async (sub, subIndex) => {
                 const realSub = await Agent.general.getSubcategories(sub.pk)
                 categories[index].childs[subIndex].subCategories=realSub
             })
         })

         dispatch(getCategories(categories))


     };
  };