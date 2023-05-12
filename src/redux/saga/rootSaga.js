import axios from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { getReposFailure, getReposSuccess } from "../state/reposState";

const getData = (page) => {
  const url = "https://api.github.com/orgs/reactjs/repos?page=" + page + "&per_page=10";
  return axios.get(url, {
    headers: { Authorization: `Bearer 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` },
  });
};

function* workGetReposFetch() {
  try {
    const page = yield select((state) => state.reposReducer.page);
    const response = yield call(getData(page));
    yield put(getReposSuccess(response.data));
  } catch (error) {
    yield put(getReposFailure(error));
  }
}

function* reposSaga() {
  yield takeLatest("repos/getReposFetch", workGetReposFetch);
}

export default reposSaga;
