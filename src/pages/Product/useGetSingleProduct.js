import { useState, useEffect } from "react";
import { getSingleProduct, getProductImage } from "../../api/gets";

export const useGetSingleProduct = (productId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    (async () => {
      const response = await getSingleProduct(productId);
      setProduct(response);
      const imgResponse = await getProductImage(response.image_title);
      const imgBlob = await imgResponse.blob();
      const imgObjectURL = URL.createObjectURL(imgBlob);
      setImgUrl(imgObjectURL);
      setTimeout(() => {
        setIsLoading(false);
      }, 350);
    })();
  }, []);

  return { product, imgUrl, isLoading };
};
