import { combineReducers, createStore } from "redux";
import reposReducer from "./ducks/repos";

const reducer = combineReducers({
  repos: reposReducer,
});

const store = createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
