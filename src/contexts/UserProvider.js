import { useState, useEffect, createContext } from "react";
import { getCurrentUser } from "../api/gets";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthed: false,
    userId: "",
    userEmail: "",
  });

  useEffect(() => {
    (async () => {
      const currentUser = await getCurrentUser();
      if (currentUser.id)
        setUser({
          ...user,
          isAuthed: true,
          userId: currentUser.id,
          userEmail: currentUser.email,
        });
    })();
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
