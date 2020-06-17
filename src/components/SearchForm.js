import React from "react";

export const SearchForm = () => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input className="input" type="text" placeholder="Find a Pokemon" />
      </div>
      <div className="control">
        <button className="button is-info">Search</button>
      </div>
    </div>
  );
};
