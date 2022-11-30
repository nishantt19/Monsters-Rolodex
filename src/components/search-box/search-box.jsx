import React from "react";

import "./search-box.css";

const Search = (props) => {
  return (
    <input
      type="search"
      placeholder={props.placeholder}
      onChange={props.onSearchChange}
      className="search-box"
    />
  );
};

export default Search;
