import React from "react";
import { NavLink } from "react-router-dom";
import "./compte.css";

function Compte(props) {
  return (
    <div className="compte">
      <h3>Compte</h3>
      <div className="liens">
        <NavLink to="/compte/modifier">
          <i className="bi bi-person-circle"></i>
          Paramètres
        </NavLink>
        <NavLink to="/compte/commandes">
          <i className="bi bi-box"></i>
          Commandes
        </NavLink>
        <NavLink to="/compte/parametres">
          <i className="bi bi-gear"></i>
          Paramètres
        </NavLink>
        <NavLink to="/compte/application">
          <i className="bi bi-android"></i>
          Application
        </NavLink>

      </div> 
    </div>
  );
}

export default Compte;
