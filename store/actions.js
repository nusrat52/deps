import * as actionType from "./actionTypes"
import axios from "axios";
 import {Agent} from "../api/agent"


export const login = (userData) => {
    console.log(userData, 'usrdata');
    return {
        type: actionType.LOGIN,
        payload:userData
    }
}



