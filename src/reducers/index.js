import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import globalReducer from './global';
import employee from './employee';

export default combineReducers({
  routing: routerReducer,
  global: globalReducer,
  form: formReducer,
  employee
});
