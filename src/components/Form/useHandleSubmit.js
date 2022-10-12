import { useContext, useState } from "react";
import { authUser, createUser } from "../../auth/user";
import { UserContext } from "../../contexts/UserProvider";
import { getCurrentUser } from "../../api/gets";

export const useHandleSubmit = () => {
  const [user, setUser] = useContext(UserContext);

  const handleClientReq = async (formType, formValues) => {
    switch (formType) {
      case "Login": {
        const { isSuccessfull, redirectPath } = await authUser(
          formValues.email,
          formValues.password
        );
        if (isSuccessfull) {
          const currentUser = await getCurrentUser();
          setUser({
            ...user,
            isAuthed: true,
            userId: currentUser.id,
            userEmail: currentUser.email,
          });
        }
        return { isSuccessfull, redirectPath };
      }
      case "Create Account": {
        const { isSuccessfull, redirectPath } = await createUser(
          formValues.email,
          formValues.password,
          formValues["confirm password"]
        );
        return { isSuccessfull, redirectPath };
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
