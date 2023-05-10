import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import reposReducer from "./state/reposState";
import reposSaga from "../redux/saga/rootSaga";

const reducer = combineReducers({
  reposReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devtools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(reposSaga);

export default store;
