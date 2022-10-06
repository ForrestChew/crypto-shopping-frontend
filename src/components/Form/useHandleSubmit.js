export const useHandleSubmit = (formType, formValues) => {
  const formSubmitActionHook = "use".concat(formType).concat(".js");
  switch (formType) {
    case "Login":
      import("../../auth/".concat(formSubmitActionHook)).then((module) =>
        module.useLogin(formValues.email, formValues.password)
      );
      break;
    case "Create Account":
      import("../../auth/useCreateUser").then((module) =>
        module.useCreateUser(
          formValues.email,
          formValues.password,
          formValues["confirm password"]
        )
      );
      break;
    default:
      console.log(
        "No cases found in switch statement. Check useHandleSubmit.js."
      );
  }
};
