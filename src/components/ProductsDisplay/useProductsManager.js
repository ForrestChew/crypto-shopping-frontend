import { useState, useEffect } from "react";
import { getProducts, getProductsWithQuery } from "../../api/gets";
import { useSearchParams } from "react-router-dom";

export const useProductsManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();
  let queryStr = searchParams.get("query");

  const pageNumbers = [];
  const productsPerPage = 8;

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    (async () => {
      const offSet = currentPage * 8 - 8;
      const response = queryStr
        ? await getProductsWithQuery(queryStr)
        : await getProducts();
      setProducts(response.slice(offSet, offSet + 8));
      setTotalProducts(response.length);
      setTimeout(() => {
        setIsLoading(false);
      }, 350);
    })();
  }, [currentPage, queryStr]);

  return {
    products,
    isLoading,
    paginate,
    pageNumbers,
    queryStr,
  };
};
