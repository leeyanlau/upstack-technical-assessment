import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reposReducer from "./ducks/repos";
import { watcherSaga } from "./saga/rootSaga";

const reducer = combineReducers({
  repos: reposReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  {},
  compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

sagaMiddleware.run(watcherSaga);

export default store;
