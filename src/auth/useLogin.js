import { login } from "./api";

export const useLogin = async (username, password) => {
  const res = await login(username, password);
  return res;
};
