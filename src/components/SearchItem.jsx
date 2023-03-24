/* eslint-disable react/prop-types */
import React from "react";

function SearchItem({ search, setSearch }) {
  return (
    <form
      action="submit"
      className="searchForm"
      onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchItem;