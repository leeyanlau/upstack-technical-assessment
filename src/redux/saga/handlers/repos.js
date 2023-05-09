import { call, put } from "redux-saga/effects";
import { requestGetRepos } from "./../requests/repos";
import { setRepos } from "../../ducks/repos";

export function* handleGetRepos() {
  try {
    const res = yield call(requestGetRepos);
    const { data } = res;
    yield put(setRepos(data));
  } catch (error) {
    console.log(error);
  }
}
