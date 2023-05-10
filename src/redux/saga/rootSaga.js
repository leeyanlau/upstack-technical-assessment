import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getReposSuccess } from "../state/reposState";

function fetchRepos() {
  return axios.request({
    method: "get",
    url: "https://api.github.com/orgs/reactjs/repos",
  });
}

function* workGetReposFetch() {
  const repos = yield call(fetchRepos);
  yield put(getReposSuccess(repos.data));
}

function* reposSaga() {
  yield takeEvery("repos/getReposFetch", workGetReposFetch);
}

export default reposSaga;
