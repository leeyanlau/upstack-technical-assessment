import React from "react";

import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/state/reposState";

const SearchBar = () => {
  const { searchTerm } = useSelector((state) => state.reposReducer);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <div>
      <input placeholder="Search for repositories..." value={searchTerm} onChange={handleSearchChange} />
      <MdSearch />
    </div>
  );
};

export default SearchBar;
