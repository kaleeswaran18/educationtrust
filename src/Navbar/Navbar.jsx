import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="container">
        <NavLink className="logo" to="/">
          GREAT GRAY
        </NavLink>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-active" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`menu-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;