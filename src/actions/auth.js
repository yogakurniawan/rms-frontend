export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/users/loadAuth')
  };
}

export function login(username, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/users/login', {
      data: {
        username: username,
        password: password
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => {
      return commonAsyncUtil(client.post('users/logout', {
        params: {
          access_token: Cookie.get('token')
        }
      }).then(new Promise((resolve) => {
        Cookie.remove('token');
        return resolve(null);
      })));
    }
  };
}

export function register(data) {
  return {
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAIL],
    promise: (client) => client.post('/users', {
      data: data
    })
  };
}

export function validateUsername(username) {
  return {
    types: [VALIDATE_USERNAME, VALIDATE_USERNAME_SUCCESS, VALIDATE_USERNAME_FAIL],
    promise: (client) => client.post('/users/validateusername', {
      params: {
        username
      }
    })
  };
}

export function validateEmail(email) {
  return {
    types: [VALIDATE_EMAIL, VALIDATE_EMAIL_SUCCESS, VALIDATE_EMAIL_FAIL],
    promise: (client) => client.post('/users/validateemail', {
      params: {
        email
      }
    })
  };
}