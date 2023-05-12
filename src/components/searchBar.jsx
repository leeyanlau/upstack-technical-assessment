import React from "react";

import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getReposFetch, setSearchTerm } from "../redux/state/reposState";

import "../styles/SearchBar/SearchBar.css";

const SearchBar = () => {
  const q = useSelector((state) => state.reposReducer.searchTerm);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
    dispatch(getReposFetch());
  };

  return (
    <div className="searchBar">
      <BiSearch className="searchBar_icon" />
      <input className="searchBar_input" placeholder="Search for repositories..." value={q} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBar;
