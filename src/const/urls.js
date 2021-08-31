import {APIURL} from "./index";

export const LOGIN = `${APIURL}auth/login/`
export const REGISTER = `${APIURL}auth/register/`
export const USER = `${APIURL}auth/`
export const LOGOUT = `${APIURL}auth/logout/`

export const BLOGS = `${APIURL}blogs/`
export const SINGLEBLOG = id => BLOGS + String(id) + '/'

export const COMPLAINTS = `${APIURL}complaints/`
export const COMPLAINTS_ADD = `${APIURL}complaints/add/`
export const SINGLECOMPLAINT = id => COMPLAINTS + String(id) + '/'
export const COMPLAINTSCOUNTER = `${COMPLAINTS}counter/`

