import Cookie from 'js-cookie';
import { removeItem } from './localStorage';

export const invalidTokenError = (response) => {
  console.log(response.status);
  if (response.status && response.status === 401) {
    Cookie.remove('token');
    removeItem('userInfo');
    window.location.replace('/');
  }
};
