import { useState, useEffect } from "react";
import { getProductImage } from "../api/gets";

// Use when displaying multiple products.
export const useGetProductImageUrl = (imageTitle) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    (async () => {
      const imgResponse = await getProductImage(imageTitle);
      const imgBlob = await imgResponse.blob();
      const imgObjectURL = URL.createObjectURL(imgBlob);
      setImgUrl(imgObjectURL);
    })();
  }, []);
  return imgUrl;
};
