import { useContext } from "react";
import { Link } from "react-router-dom";
import { HamburgerMenuContext } from "../../../contexts/HamMenuContextProvider";
import "./HamMenu.css";
const HamMenu = () => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useContext(HamburgerMenuContext);
  return (
    <ul className="ham-items">
      <li>Top Deals</li>
      <li>Electronics</li>
      <li>Clothing</li>
      <li>Toys</li>
      <li>Crypto</li>
      <Link
        to="/profile"
        style={{ textDecoration: "none" }}
        onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}
      >
        <li className="profile">Profile</li>
      </Link>
    </ul>
  );
};

export default HamMenu;
