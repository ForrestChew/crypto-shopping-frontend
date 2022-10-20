import { CP_BACKEND_API_BASE_URL } from "../constants";

export const getCurrentUser = async () => {
  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/users`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getProductImage = async (imageTitle) => {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products/images/${imageTitle}`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response;
};

export const getProducts = async () => {
  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getTopDeals = async (skip = 0) => {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products/top-deals?skip=${skip}`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getTotalTopDeals = async () => {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products/top-deals/total`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getSingleProduct = async (productId) => {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products/${productId}`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
