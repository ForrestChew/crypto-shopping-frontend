import { useState } from "react";
import { NavLink } from "react-router-dom";
import houseIcon from "../../assets/house-icon-svg.svg";
import SearchBar from "./SearchBar/SearchBar";
import cartIconSvg from "../../assets/cart-icon-svg.svg";
import hamMenuIcon from "../../assets/ham-menu-icon-svg.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <a href="http://localhost:3000" className="logo">
          <img id="house-icon" src={houseIcon} alt="Not Found" />
          <h3 id="logo--heading">
            <em>Crypto</em>
            <em>Shopping</em>
          </h3>
        </a>
        <SearchBar />
        <a href="http://localhost:3000" className="cart">
          <img id="cart-icon" src={cartIconSvg} alt="Not Found" />
        </a>
        <img
          id="ham-icon"
          src={hamMenuIcon}
          alt="Not Found"
          onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}
        />
      </nav>

      <div className="subnav-container">
        <ul className={isHamMenuOpen ? "ham--menu" : "menu"}>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu--item-active" : "menu--item"
            }
            to="/top-deals"
          >
            <li
              className="menu--item"
              onClick={() => isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)}
            >
              Top Deals
            </li>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu--item-active" : "menu--item"
            }
            to="/crypto"
          >
            <li
              className="menu--item"
              onClick={() => isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)}
            >
              Crypto
            </li>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu--item-active" : "menu--item"
            }
            to="/orders"
          >
            <li
              className="menu--item"
              onClick={() => isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)}
            >
              Orders
            </li>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu--item-active" : "menu--item"
            }
            to="/profile"
          >
            <li
              className="menu--item"
              onClick={() => isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)}
            >
              Profile
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
