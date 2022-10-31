import { useState, useEffect } from "react";
import { getSingleProduct, getProductImage } from "../../api/gets";
import { createCartItem } from "../../api/posts";

export const useSingleProduct = (productId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [imgUrl, setImgUrl] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [errorType, setErrorType] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleAddToCart = async (productId, qty) => {
    if (qty === 0) return handleError();
    const response = await createCartItem(productId, qty);
    if (response) {
      setErrorType(true);
    }
    handleError();
  };

  const handleError = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 2000);
  };

  const adjustQuantity = (num) => {
    if (quantity + num >= 0 && quantity + num <= product.quantity)
      setQuantity((quantity) => quantity + num);
  };

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

  return {
    product,
    imgUrl,
    isLoading,
    quantity,
    adjustQuantity,
    handleAddToCart,
    errorType,
    showError,
  };
};
