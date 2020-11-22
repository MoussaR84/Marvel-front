import React from "react";
import axios from "axios";

const Inputsearch = ({ searchItem, setSearchItem }) => {
  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        onChange={handleSearch}
        type="text"
        value={searchItem}
        placeholder="Looking for something"
      />
    </div>
  );
};

export default Inputsearch;
