import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/company_logo.png";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar fixed-top">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="AM Logo" />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="nav-link active" to="/">
              HOME
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/dev">
              DEV
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/ops">
              OPS
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/hlp">
              HLP
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/app">
              APP
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/unternehmen">
              Unternehmen
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/karriere">
              Karriere
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/hooks">
              Hooks
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {!click ? ( // if clicked shows x otherwhise hamburger
            <FaBars size={30} style={{ color: "#fff" }} />
          ) : (
            <FaTimes size={30} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
