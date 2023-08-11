import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="error">
      <Navigation />
      <div className="error-text">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">
          <button>Retourner sur la page d'accueil</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
