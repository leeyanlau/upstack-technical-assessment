import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos", //state name
  initialState: {
    repos: [], //variable for the repos
    searchTerm: "", //variable for the search term
    page: 1, //page number for pagination
    hasMore: true, //boolean for if there's more to load
    isLoading: false, //boolean for async functions
    error: null, //variable for error
  },
  reducers: {
    getReposFetch: (state) => {
      state.isLoading = true;
    },
    getReposSuccess: (state, action) => {
      state.repos = [...state.repos, ...action.payload];
      state.page += 1;
      state.hasMore = action.payload.length > 0;
      state.isLoading = false;
    },
    getReposFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { getReposFetch, getReposSuccess, getReposFailure, setSearchTerm } = reposSlice.actions;

export default reposSlice.reducer;
