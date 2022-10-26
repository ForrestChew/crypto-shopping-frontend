import { useState } from "react";
import { getProductSearchBarInfo } from "../../../api/gets";
import { useNavigate, createSearchParams } from "react-router-dom";

export const useAutocomplete = () => {
  const [items, setItems] = useState([]);

  const handleOnSearch = async (searchStr) => {
    const response = await getProductSearchBarInfo(searchStr);
    setItems(response);
  };

  const navigate = useNavigate();
  const handleOnSelect = (item) => {
    const params = { query: item.title };
    navigate({
      pathname: `/products`,
      search: `?${createSearchParams(params)}`,
    });
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Title: {item.title}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          Category: {item.category}
        </span>
      </>
    );
  };

  return {
    handleOnSearch,
    handleOnSelect,
    formatResult,
    items,
  };
};
