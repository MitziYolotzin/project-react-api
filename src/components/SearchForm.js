import React, { useState } from "react";

export const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (valueInput) => {
    setSearchInput(valueInput);
  };

  return (
    <div className="search-pokemon">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Find a Pokemon"
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </div>
  );
};
