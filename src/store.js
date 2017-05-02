import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createReducer from './reducers';
import * as actionCreators from './action/actionCreators';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    thunk,
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    createReducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  // initial data
  store.dispatch(actionCreators.requestGetEmployee());

  return store;
}
