import React from "react";
import "./style.css";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded"; // Updated import

function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchRoundedIcon />
      <input
        placeholder="search"
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}

export default Search;
