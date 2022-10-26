import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useAutocomplete } from "./useAutocomplete";
import "./SearchBar.css";

const SearchBar = () => {
  const { handleOnSearch, handleOnSelect, formatResult, items } =
    useAutocomplete();

  return (
    <div className="search-bar">
      <ReactSearchAutocomplete
        items={items}
        fuseOptions={{ keys: ["title", "category"] }}
        resultStringKeyName="title"
        formatResult={formatResult}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        placeholder="Search Marketplace..."
        autoFocus
      />
    </div>
  );
};

export default SearchBar;
