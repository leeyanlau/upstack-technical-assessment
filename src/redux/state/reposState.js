import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    searchTerm: "",
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
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { getReposFetch, getReposSuccess, getReposFailure, setSearchTerm } = reposSlice.actions;

export default reposSlice.reducer;
