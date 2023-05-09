export const GET_REPOS = "GET_REPOS"; //action type
const SET_REPOS = "SET_REPOS";

//action
export const getRepos = () => ({
  type: GET_REPOS,
});

export const setRepos = (repos) => ({
  type: SET_REPOS,
  repos,
});

//state variable
const initState = {
  repos: undefined,
};

//reducer switch case
const store = (state = initState, action) => {
  switch (action.type) {
    case SET_REPOS:
      const { repos } = action;
      return { ...state, repos };
    default:
      return state;
  }
};

export default store;
