import ActionTypes from "../constants/actionTypes";

export const setRepos = (repos) => {
  return {
    type: ActionTypes.SET_REPOS,
    payload: repos,
  };
};
