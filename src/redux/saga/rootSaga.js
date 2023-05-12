import axios from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { getReposFailure, getReposSuccess } from "../state/reposState";

const getData = async (page, searchTerm) => {
  const url = "https://api.github.com/search/repositories?q=org:reactjs+" + searchTerm + "&page=" + page + "&per_page=10";
  const res = await axios
    .get(url, { headers: { Authorization: `Bearer ${process.env.REACT_APP_SECRET2}` } })
    .then((response) => response.data.items);
  return res;
};

function* workGetReposFetch() {
  try {
    const { page, searchTerm } = yield select((state) => state.reposReducer);
    const response = yield call(getData, page, searchTerm);
    yield put(getReposSuccess(response));
  } catch (error) {
    yield put(getReposFailure(error));
  }
}

function* reposSaga() {
  yield takeLatest("repos/getReposFetch", workGetReposFetch);
}

export default reposSaga;
