import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "./useGetSingleProduct";
import { useGetProductImageUrl } from "../../hooks/useGetProductImageUrl";

const Product = () => {
  const { id } = useParams();
  const { product, imgUrl, isLoading } = useGetSingleProduct(id);
  console.log(product, imgUrl);

  return <section></section>;
};

export default Product;
