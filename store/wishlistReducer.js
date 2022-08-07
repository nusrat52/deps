import * as ActionTypes from "./actionTypes";

export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_WISHLIST:
       localStorage.setItem(
        "wishlist",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case ActionTypes.DELETE_WISHLIST:
       let newState = state;
      newState = newState.filter((item) => item.id != action.payload);
      localStorage.setItem("wishlist", JSON.stringify(newState));


    case ActionTypes.GET_WISHLIST:
        let newState2
      const localSt = localStorage.getItem("wishlist");
      if (localSt) {
        newState2 = JSON.parse(localSt);
      } else {
        newState2 = [];
      }

      return newState2;

    default:
      return state;
  }
};
