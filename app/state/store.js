import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { middleware as apiMiddleware } from 'redux-api-call';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware();

// eslint-disable-next-line
const reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = reduxCompose(
  applyMiddleware(apiMiddleware, thunk, epicMiddleware)
);

const store = createStore(rootReducer, enhancer);

epicMiddleware.run(rootEpic);

export default store;
