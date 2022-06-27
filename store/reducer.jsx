import * as ActionTypes from "./actionTypes"

export const loginReducer = (state = {
  logged: false,
  address: null,
  email: null,
  name: null,
  password: null,
  phone_number: null,
  surname:null
}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {... action.payload, logged:true};

    default:
      return state;
  }
};
