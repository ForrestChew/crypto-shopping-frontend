import { BASE_URL } from "../constants";
export const login = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(
      `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
    ),
  };
  try {
    const res = await fetch(`${BASE_URL}/login`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const createUser = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: username, password }),
  };
  try {
    const res = await fetch(`${BASE_URL}/users`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};
