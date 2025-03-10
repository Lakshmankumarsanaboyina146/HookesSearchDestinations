import { React, useEffect, useState } from "react";

import DestinationItem from "../DestinationItem";

import "./index.css";

const DestinationSearch = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const { destinationsList } = props;

  useEffect(() => {
    if (searchInput === "") {
      setSearchResults(destinationsList);
    } else {
      const searchedResults = destinationsList.filter((eachDestination) =>
        eachDestination.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(searchedResults);
      setSearchResults(searchedResults);
    }
  }, [destinationsList, searchInput]);



  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="app-container">
      <div className="destinations-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destinations-list">
          {searchResults.map((eachDestination) => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationSearch;
