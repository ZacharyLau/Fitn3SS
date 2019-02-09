import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";

import { rootSaga } from "../modules/";
import { appReducers } from "../modules/";

const sagaMiddleware = createSagaMiddleware();

export default initialState => {
  const middlewares = [sagaMiddleware];
  const windowObj = this.window || {};
  let composeEnhancers = compose;

  if (__DEV__) {
    composeEnhancers =
      windowObj.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middlewares.push(logger);
  }

  const store = createStore(
    appReducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
