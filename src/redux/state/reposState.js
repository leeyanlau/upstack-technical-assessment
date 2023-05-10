import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    isLoading: false,
  },
  reducers: {
    getReposFetch: (state) => {
      state.isLoading = true;
    },
    getReposSuccess: (state, action) => {
      state.repos = action.payload;
      state.isLoading = false;
    },
    getReposFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getReposFetch, getReposSuccess, getReposFailure } = reposSlice.actions;

export default reposSlice.reducer;
