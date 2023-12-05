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
      <Carrousel />
    </>
  );
}

export default Accueil;
