import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name"
        spellCheck="false"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>
        <img src="images/search.png" alt="search" className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
