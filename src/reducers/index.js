import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import globalReducer from './global';

export default combineReducers({
  routing: routerReducer,
  global: globalReducer,
  form: formReducer
});
