import React from "react";
import "./monCompte.css"; // Assurez-vous que le style correspond à celui de Navbar

function MonCompte({ user, toggleNavbar }) {
  // Vous pouvez ajouter des états et des fonctions pour gérer les paramètres du compte

  return (
    <>
      <nav className="mon-compte-nav">
        <div className="topnav">
          <img src="src/assets/Logo2.png" alt="Logo" />
          <div className="info-compte">
            <h3>{user?.nom}</h3>
            {/* Autres informations du compte */}
          </div>
        </div>

        <div className="bottomnav">
          <button className="btn">
            <i className="bi bi-pencil-fill"></i> Vos commandes
          </button>
          <button className="btn">
            <i className="bi bi-shield-lock-fill"></i> informations personnelles
          </button>
          <button className="btn">
            <i className="bi bi-gear-fill"></i> Paramètres
          </button>
          <button className="btn" onClick={toggleNavbar}>
          <i className="bi bi-arrow-left-circle-fill"></i> Retour
          </button>
        </div>
      </nav>
    </>
  );
}

export default MonCompte;