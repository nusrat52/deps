import * as ActionTypes from "./actionTypes";

export const loginReducer = (
  state = {
    logged: undefined,
    address: null,
    email: null,
    name: null,
    phone_number: null,
    surname: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      console.log('login olan yer');
      return { ...action.payload, logged: true };
    case ActionTypes.LOGOUT:
      console.log("logout yerune gitirmi");
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
