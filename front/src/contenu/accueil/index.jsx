import React, { useState, useEffect } from "react";
import "./accueil.css";

import Carrousel from "./carousel";

function Accueil(props) {
  return (
    <>
      <div className="firstblock">
        <h3>
          <span className="titre">Bienvenue sur notre site</span>
        </h3>
        <p>
          <span className="titre">Nous sommes heureux de vous accueillir</span>
        </p>
       
      </div>
      <div className="deproduits">
        <div>
          <h4>
            Découvrez notre <b>nouvelle gamme de produits</b> !
          </h4>
          <a href="">
            Voir les produits <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <img src="src/assets/KAPPA.png" className="" alt="" />
      </div>
      <Carrousel />
    </>
  );
}

export default Accueil;
