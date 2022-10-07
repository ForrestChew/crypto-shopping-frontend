import { CP_BACKEND_API_BASE_URL } from "../constants";
export const login = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(
      `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
    ),
  };
  try {
    const res = await fetch(`${CP_BACKEND_API_BASE_URL}/login`, requestOptions);
    return res.ok;
  } catch (err) {
    return err;
  }
};

export const createUser = async (username, password, confirmedPassword) => {
  if (password !== confirmedPassword) return "Passwords do not Match";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: username, password }),
  };
  try {
    const res = await fetch(`${CP_BACKEND_API_BASE_URL}/users`, requestOptions);
    return res;
  } catch (err) {
    return err;
  }
};
