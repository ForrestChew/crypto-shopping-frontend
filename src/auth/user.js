import { CP_BACKEND_API_BASE_URL } from "../constants";

export const authUser = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    credentials: "include",
    body: JSON.stringify(
      `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
    ),
  };
  try {
    const response = await fetch(
      `${CP_BACKEND_API_BASE_URL}/auth/login`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return {
      ...(await response.json()),
      isSuccessfull: response.ok,
      redirectPath: "/",
    };
  } catch {
    return { isSuccessfull: false };
  }
};

export const createUser = async (username, password, confirmedPassword) => {
  if (password !== confirmedPassword) return;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: username, password }),
  };
  try {
    const response = await fetch(
      `${CP_BACKEND_API_BASE_URL}/users`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return { isSuccessfull: response.ok, redirectPath: "/login" };
  } catch {
    return { isSuccessfull: false };
  }
};
