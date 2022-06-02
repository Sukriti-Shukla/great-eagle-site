import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import droneIcon from "../assets/drone-icon.png";
import { useNavigate } from "react-router-dom";
import Store from "./store/Store";

const Header = () => {
  const navigate = useNavigate();
  const [headClass, setHeadClass] = useState(classes.navbar);

  const changeBackground = () => {
    if (element.scrollTop === 0) {
      setHeadClass(classes["header"]);
    } else {
      setHeadClass(classes["header-active"]);
    }
  };

  let element = document.getElementById("idMain"); // check useEffects
  console.log(element);

  if (element) element.addEventListener("scroll", changeBackground);

  return (
    <header className={classes.header}>
      <nav className={headClass}>
        <img src={droneIcon} height={30} width={75} />
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/resourses"
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <button className={classes.btn} onClick={() => navigate("/store")}>
          {/* <a href="/store">Store</a> */}
          Store
        </button>
      </nav>
    </header>
  );
};

export default Header;
