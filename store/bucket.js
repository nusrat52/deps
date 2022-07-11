import * as ActionTypes from "./actionTypes";

export const bucket = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD__PRODUCT:
      const newState = [...state, action.payload];
      localStorage.setItem("bucket", JSON.stringify(newState));
      return [...newState];
    case ActionTypes.DELETE__PRODUCT:
      const newState2 = state.filter((st) => st.id !== action.payload);
      localStorage.setItem("bucket", JSON.stringify(newState2));
      return newState2;

    case ActionTypes.CHECKOUT:
      localStorage.setItem("bucket", JSON.stringify([]));
      return [];
    case ActionTypes.GETITEMSFROMSTORAGE:
      let bcket = localStorage.getItem("bucket");

      let bucketDatasfromSt = [];
      if (bcket != "undefined") {
        bucketDatasfromSt = JSON.parse(bcket);
      }

      return bucketDatasfromSt;

    case ActionTypes.INCREASEITEM:
      const newState3 = state.map((st) => {
        if (st.id === action.payload) {
          st.count++;
          return st;
        }
        return st;
      });
      localStorage.setItem("bucket", JSON.stringify(newState3));
      return newState3;

    
      case ActionTypes.DECREASEITEM:
      const newState4 = state.map((st) => {
        if (st.id === action.payload && st.count>1) {
          st.count--;
          return st;
        }
        return st;
      });
      localStorage.setItem("bucket", JSON.stringify(newState4));
      return newState4;
    
    
    default:
      return state;
  }
};
