import { takeLatest } from "redux-saga/effects";
import { handleGetRepos } from "./handlers/repos";
import { GET_REPOS } from "./../ducks/repos";

export function* watcherSaga() {
  yield takeLatest(GET_REPOS, handleGetRepos);
}
