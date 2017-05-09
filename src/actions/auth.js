import axios from 'axios';
import Cookie from 'js-cookie';
import qs from 'qs';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  BASE_URL,
  LOGOUT,
  LOGOUT_SUCCESS
} from '../constants';

const LOGIN_URL = `${BASE_URL}/oauth/token`;

function doLogin() {
  return {
    type: LOGIN
  }
}

function loginSuccess(loginInfo) {
  return {
    type: LOGIN_SUCCESS,
    loginInfo
  }
}

function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error
  }
}

const login = (username, password) => {
  const config = {
    method: 'POST',
    url: LOGIN_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='
    },
    data: qs.stringify({
      grant_type: 'password',
      username,
      password
    })
  }
  return (dispatch) => {
    dispatch(doLogin());
    return axios(config).then(({ data }) => {
      if (data.error) {
        dispatch(loginFail(data));
        return Promise.reject(data);
      } else {
        dispatch(loginSuccess(data));
        Cookie.set('token', data.access_token);
        return Promise.resolve(data);
      }
    }).catch(({ response }) => {
      dispatch(loginFail(response.data));
      return Promise.reject(response.data);
    });
  };
};

function doLogout() {
  return {
    type: LOGOUT
  }
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}

const logout = () => {
  return (dispatch) => {
    dispatch(doLogout());
    Cookie.remove('token');
    dispatch(logoutSuccess());
    window.location.replace('/');
  };
};

export default {
  login,
  logout
}
