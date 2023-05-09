import React from "react";

import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div>
      <input placeholder="Search for repositories..." />
      <MdSearch />
    </div>
  );
};

export default SearchBar;
