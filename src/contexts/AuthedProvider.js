import { useState, createContext } from "react";

export const AuthedContext = createContext();

const AuthedProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <AuthedContext.Provider value={[isAuthed, setIsAuthed]}>
      {children}
    </AuthedContext.Provider>
  );
};

export default AuthedProvider;
