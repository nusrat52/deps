import * as ActionTypes from "./actionTypes";

export const categories = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET__CATEGORIES:
         return action.payload;
 
    
    default:
      return state;
  }
};
