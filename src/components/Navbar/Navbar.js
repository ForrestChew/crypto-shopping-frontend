import { useContext } from "react";
import csLogo from "../../assets/cs-logo.svg";
import csCart from "../../assets/cs-cart.svg";
import hamMenu from "../../assets/ham-menu.svg";
import SearchBar from "./SearchBar/SearchBar";
import { HamburgerMenuContext } from "../../contexts/HamMenuContextProvider";
import HamMenu from "./HamburgerMenu/HamMenu";
import "./Navbar.css";

const Navbar = () => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useContext(HamburgerMenuContext);
  return (
    <>
      <nav>
        <a href="http://localhost:3000" className="logo-area">
          <img src={csLogo} alt="Not Found" width="90%" />
          <div className="title">
            <h3>
              <em>CryptoShopping</em>
            </h3>
          </div>
        </a>
        <SearchBar />
        <img
          onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}
          className="ham-menu"
          src={hamMenu}
          alt="Not found"
          width="5.5%"
        />
        <a href="http://localhost:3000" className="cart-area">
          <img src={csCart} alt="Not Found" />
        </a>
      </nav>
      {isHamMenuOpen && <HamMenu />}
    </>
  );
};

export default Navbar;
