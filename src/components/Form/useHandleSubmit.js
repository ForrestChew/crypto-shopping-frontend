import { useContext, useState } from "react";
import { login, createUser } from "../../api/postReqs";
import { AuthedContext } from "../../contexts/AuthedProvider";

export const useHandleSubmit = () => {
  const [, setIsAuthed] = useContext(AuthedContext);
  const handleClientReq = async (formType, formValues) => {
    switch (formType) {
      case "Login": {
        const loginRes = await login(formValues.email, formValues.password);
        const loginResObj = {
          successStatus: loginRes,
          redirectPath: "/",
        };
        if (loginRes) setIsAuthed(true);
        return loginResObj;
      }
      case "Create Account": {
        const createUserRes = await createUser(
          formValues.email,
          formValues.password,
          formValues["confirm password"]
        );
        const createUserResObj = {
          successStatus: createUserRes,
          redirectPath: "/",
        };
        if (createUserRes) setIsAuthed(true);
        return createUserResObj;
      }
      default: {
        console.log(
          "No cases found in switch statement. Check useHandleSubmit.js."
        );
      }
    }
  };
  return { handleClientReq };
};
