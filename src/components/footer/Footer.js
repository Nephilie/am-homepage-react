import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.css";
import logo from "../../images/company_logo.png";
import {
  FaEnvelopeSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaXingSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row">
          {/* Column 1 - logo */}
          <div className="col">
            <Link>
              <img src={logo} alt="AM Logo"  />
            </Link>
          </div>
          {/* Column 2 - standorte */}
          <div className="col">
            <div className="row">
              <h4 className="col-12">AM Standorte</h4>
              <div className="col-12">
                <div className="footer-text-headline">Meschede</div>
                <div className="footer-text">
                  <p>
                    Feldstrasse 34 <br /> 59872 Meschede
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="footer-text-headline">Hamburg</div>
                <div className="footer-text">
                  <p>
                    Borteler Chaussee 47 <br /> 22453 Hamburg
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="footer-text-headline">Dortmund</div>
                <div className="footer-text">
                  <p>
                    Lissaboner Allee 7 <br /> 44269 Dortmund
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 -portfolio */}
          <div className="col">
            <h4>Portfolio</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/dev">DEV</Link>
              </li>
              <li>
                <Link to="/ops">OPS</Link>
              </li>
              <li>
                <Link to="/hlp">HLP</Link>
              </li>
              <li>
                <Link to="/app">APP</Link>
              </li>
            </ul>
          </div>
          {/* Column 4 - navigation */}
          <div className="col">
            <h4>Navigation</h4>
            <ul className="list-unstyled">
              <li className="foo-link">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/unternehmen">UNTERNEHMEN</Link>
              </li>
              <li>
                <Link to="/karriere">KARRIERE</Link>
              </li>
              <li>
                <Link to="/">DATENSCHUTZ</Link>
              </li>
              <li>
                <Link to="/">IMPRESSUM</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Social Media & Copyright */}
      <div className="container-fluid">
        <div className="row" id="social-media">
          <div className="col-12 text-center">
            <Link>
              <FaEnvelopeSquare size={30} style={{ color: "#fff" }}  />
            </Link>
            <Link>
              <FaLinkedin size={30} style={{ color: "#fff" }}  />
            </Link>
            <Link>
              <FaXingSquare size={30} style={{ color: "#fff" }}  />
            </Link>
            <Link>
              <FaInstagramSquare size={30} style={{ color: "#fff" }}  />
            </Link>
          </div>
        </div>
        <div className="row" id="copyright">
          <div className="col-12 text-center">
            Alle Rechte vorbehalten - AM-Gmbh 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
