export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const CP_BACKEND_API_BASE_URL =
  process.env.REACT_APP_CP_BACKEND_API_BASE_URL;
export const LOGIN_FORM_SPEC = {
  title: "Login",
  labelTitles: ["Email", "Password"],
  inputFields: ["email", "password"],
};
export const CREATE_ACCOUNT_FORM_SPEC = {
  title: "Create Account",
  labelTitles: ["Email", "Password", "Confirm Password"],
  inputFields: ["email", "password", "confirm password"],
};
