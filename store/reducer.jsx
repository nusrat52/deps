import * as ActionTypes from "./actionTypes";

export const loginReducer = (
  state = {
    logged: undefined,
    address: null,
    email: null,
    name: null,
    phone_number: null,
    surname: null,
    id: null,
    checkout:[]
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
       return { ...action.payload, logged: true };
    case ActionTypes.LOGOUT:
       localStorage.removeItem("token");

      return {
        logged: false,
        address: null,
        email: null,
        name: null,
        phone_number: null,
        surname: null,
      };

    default:
      return state;
  }
};
