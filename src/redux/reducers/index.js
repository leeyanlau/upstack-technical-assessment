import { combineReducers } from "redux";
import { repoReducer } from "./repoReducer";

const reducers = combineReducers({
  allRepos: repoReducer,
});

export default reducers;
