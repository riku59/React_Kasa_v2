import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="/images/LOGOKasa.png" alt="" />
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav_active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav_active" : "")}
        >
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
