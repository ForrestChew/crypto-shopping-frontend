import { CP_BACKEND_API_BASE_URL } from "../constants";

export const getCurrentUser = async () => {
  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  try {
    const response = await fetch(
      `${CP_BACKEND_API_BASE_URL}/users`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch {
    return { isSuccessfull: false };
  }
};
