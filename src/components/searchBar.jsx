import React from "react";

import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/state/reposState";

import "../styles/SearchBar/SearchBar.css";

const SearchBar = () => {
  const { searchTerm } = useSelector((state) => state.reposReducer);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <div className="searchBar">
      <BiSearch className="searchBar_icon" />
      <input className="searchBar_input" placeholder="Search for repositories..." value={searchTerm} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBar;
