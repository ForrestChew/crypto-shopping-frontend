import { useState, createContext } from "react";

export const HamburgerMenuContext = createContext();

const HamMenuContextProvider = ({ children }) => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  return (
    <HamburgerMenuContext.Provider value={[isHamMenuOpen, setIsHamMenuOpen]}>
      {children}
    </HamburgerMenuContext.Provider>
  );
};

export default HamMenuContextProvider;
