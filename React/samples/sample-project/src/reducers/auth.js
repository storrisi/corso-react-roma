import {REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR,
LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS} from '../actions/auth';

const initialState = {
    items: [],
    loginStatus: null,
    registerStatus:null
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER_START:
        return {
          ...state,
          registerStatus: 'LOADING'
        }
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          registerStatus: 'SUCCESS'
        }
      case REGISTER_USER_ERROR:
        return {
          ...state,
          registerStatus: 'ERROR'
        }
      case LOGIN_START:
        return {
          ...state,
          loginStatus: 'LOADING'
        }
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.data,
          loginStatus: 'SUCCESS'
        }
      case LOGIN_ERROR:
        return {
          ...state,
          loginStatus: 'ERROR'
        }
      default:
        return state
    }
  }

  export function getRegisterStatus(state) {
    return state.auth.registerStatus;
  }

  export function getLoginStatus(state) {
    return state.auth.loginStatus;
  }