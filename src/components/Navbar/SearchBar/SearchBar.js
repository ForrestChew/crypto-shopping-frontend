import scMG from "../../../assets/sc-mg.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search">
      <form className="search-bar-form">
        <select name="categories" className="form--select">
          <option>All</option>
          <option>Top Deals</option>
          <option>Crypto</option>
          <option>Toys</option>
          <option>Clothing</option>
        </select>
        <input
          className="search--input"
          type="text"
          width="100%"
          placeholder="Search marketplace..."
        />
        <input
          id="magnifying-glass-icon"
          type="image"
          src={scMG}
          alt="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
