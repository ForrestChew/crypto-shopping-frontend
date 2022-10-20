import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import houseIcon from "../../assets/house-icon-svg.svg";
import SearchBar from "./SearchBar/SearchBar";
import cartIconSvg from "../../assets/cart-icon-svg.svg";
import hamMenuIcon from "../../assets/ham-menu-icon-svg.svg";
import "./Navbar.css";

const Navbar = ({ authStatus }) => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <a href="http://localhost:3000" className="logo">
          <img id="house-icon" src={houseIcon} alt="Not Found" />
          <h3 id="logo-heading">
            <em>Crypto</em>
            <em>Shopping</em>
          </h3>
        </a>
        <SearchBar />
        <Link to="/cart">
          <img
            id="cart-icon"
            className="cart"
            src={cartIconSvg}
            alt="Not Found"
          />
        </Link>
        <img
          id="ham-icon"
          src={hamMenuIcon}
          alt="Not Found"
          onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}
        />
      </nav>
      <div className="subnav">
        <ul className={isHamMenuOpen ? "menu-ham" : "menu"}>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu__item-active" : "menu__item"
            }
            to="/top-deals"
          >
            <li
              className="menu__item"
              onClick={() => isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)}
            >
              Top Deals
            </li>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu__item-active" : "menu__item"
            }
            to="/crypto"
          >
            <li
              className="menu__item"
              onClick={() => isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)}
            >
              Crypto
            </li>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "menu__item-active" : "menu__item"
            }
            to="/orders"
          >
            <li
              className="menu__item"
              onClick={() => isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)}
            >
              Orders
            </li>
          </NavLink>
          {authStatus && (
            <NavLink
              className={(navData) =>
                navData.isActive ? "menu__item-active" : "menu__item"
              }
              to="/profile"
            >
              <li
                className="menu__item"
                onClick={() =>
                  isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)
                }
              >
                Profile
              </li>
            </NavLink>
          )}
          {!authStatus && (
            <NavLink
              className={(navData) =>
                navData.isActive ? "menu__item-active" : "menu__item"
              }
              to="/login"
            >
              <li
                className="menu__item"
                onClick={() =>
                  isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)
                }
              >
                Login
              </li>
            </NavLink>
          )}
          {!authStatus && (
            <NavLink
              className={(navData) =>
                navData.isActive ? "menu__item-active" : "menu__item"
              }
              to="/create-account"
            >
              <li
                className="menu__item"
                onClick={() =>
                  isHamMenuOpen && setIsHamMenuOpen(!isHamMenuOpen)
                }
              >
                Create Account
              </li>
            </NavLink>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
