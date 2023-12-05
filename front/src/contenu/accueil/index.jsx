import React, { useState, useEffect } from "react";
import "./accueil.css";

import Carrousel from "./carousel";
import Article from "./article/article";

function Accueil(props) {
  return (
    <>
<<<<<<< HEAD
    <Carrousel />
    <Article />
=======
      <div className="firstblock">
        <h3>
          <span className="titre">Bienvenue sur notre site</span>
        </h3>
        <p>
          <span className="titre">Nous sommes heureux de vous accueillir</span>
        </p>
       
      </div>
      <Carrousel />
>>>>>>> f2819bed3d74039f4084bfc877f7cba58843d2fe
    </>
  );
}

export default Accueil;
