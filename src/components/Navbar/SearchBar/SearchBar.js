import { useState, useEffect } from "react";
import { default as axios } from "axios";
import scMG from "../../../assets/sc-mg.svg";
import "./SearchBar.css";

const SearchBar = () => {
  useEffect(() => {
    const url = "http://localhost:8000/products";
    axios.get(url).then((res) => console.log(res));
  });

  return (
    <div className="search-bar">
      <form className="form">
        <input
          className="search-input"
          type="text"
          id="market-search"
          width="100%"
          placeholder="Search marketplace..."
        />
        <input className="mg" type="image" src={scMG} alt="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
