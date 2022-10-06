import { createUser } from "./api";

export const useCreateUser = async (username, password, confirmedPassword) => {
  if (password === confirmedPassword) {
    const res = await createUser(username, password);
    return res;
  }
};
