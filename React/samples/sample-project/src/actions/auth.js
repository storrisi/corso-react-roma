import {apiURL} from '../utils/constants';
import axios from 'axios';
/*REGISTER*/
export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export function startRegisterUser(data) {
    return {
        type: REGISTER_USER_START,
        data
    }
}

export function successRegisterUser(data) {
    return {
        type: REGISTER_USER_SUCCESS,
        data
    }
}

export function errorRegisterUser(error) {
    return {
        type: REGISTER_USER_ERROR,
        error
    }
}
export function registerUser(data) {
    return (dispatch) => {
        dispatch(startRegisterUser(data));

        axios.post(`${apiURL}register`, data)
            .then((response)=>{
                dispatch(successRegisterUser(response.data));
            })
            .catch((error)=>{
                dispatch(errorRegisterUser(error));
            });
    }
}
/*REGISTER*/
/*LOGIN*/
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function startLogin(data) {
    return {
        type: LOGIN_START,
        data
    }
}

export function successLogin(data) {
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

export function errorLogin(data) {
    return {
        type: LOGIN_ERROR,
        data
    }
}

export function loginUser(data) {
    return (dispatch) => {
        dispatch(startLogin(data));

        axios.post(`${apiURL}auth`, data)
            .then((response)=>{
                if (response.data) {
                    dispatch(successLogin(response.data));
                } else {
                    dispatch(errorLogin('Empty Data'));
                }
                
            })
            .catch((error)=>{
                dispatch(errorLogin(error.message));
            });
    }
}
/*LOGIN*/