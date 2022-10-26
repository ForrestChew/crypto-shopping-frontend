import { CP_BACKEND_API_BASE_URL } from "../constants";

export const getCurrentUser = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };
  const response = await fetch(`${CP_BACKEND_API_BASE_URL}/users`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getProductImage = async (imageTitle) => {
  const options = {
    method: "GET",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products/images/${imageTitle}`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response;
};

export const getProducts = async () => {
  const options = {
    method: "GET",
  };
  const response = await fetch(`${CP_BACKEND_API_BASE_URL}/products`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getProductsWithQuery = async (queryStr, skip) => {
  const options = {
    method: "GET",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products?search=${queryStr}&skip=${skip}`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getTopDeals = async (skip = 0) => {
  const options = {
    method: "GET",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products/top-deals?skip=${skip}`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getSingleProduct = async (productId) => {
  const options = {
    method: "GET",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products/${productId}`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getProductSearchBarInfo = async (searchStr) => {
  const options = { method: "GET" };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/products/product-search?search=${searchStr}`,
    options
  );

  if (!response.ok) {
    throw new Error("Network respoonse was not ok");
  }
  return await response.json();
};
