import * as ActionTypes from "./actionTypes";

export const categories = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET__CATEGORIES:
      console.log(action.payload, 'cat olan yer');
      const newState = [... action.payload];
       return [...newState];
 
    
    default:
      return state;
  }
};
