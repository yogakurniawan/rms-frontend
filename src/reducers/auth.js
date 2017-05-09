import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from '../constants';

const initialState = {
  loggingIn: false,
  loginInfo: null,
  userInfo: null,
  loginError: null,
  loggingOut: false,
  logoutError: null
};

export default function reducer(state = initialState, action = {}) {
  const { loginInfo, error } = action;
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        // userInfo,
        loginInfo
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        loginInfo: null,
        // userInfo: null,
        loginError: error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        // userInfo: null,
        loginInfo: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: error
      };
    default:
      return state;
  }
}