import { CP_BACKEND_API_BASE_URL } from "../constants";

export const deleteCartItem = async (productId) => {
  const csrfAccessToken = document.cookie.split("=")[1].split(";")[0];
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": `${csrfAccessToken}`,
    },
    credentials: "include",
  };
  const response = await fetch(
    `${CP_BACKEND_API_BASE_URL}/carts/${productId}`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return "Success";
};
