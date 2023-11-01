
import React, { useState, useEffect } from "react";
import "./accueil.css";
import Carrousel from "./carrousel/carrousel.jsx";
import  Articles  from "./articles/articles.jsx";

function Accueil(props) {

  return (
    <>
    <Carrousel></Carrousel>
    <Articles />
    </>
  );
}

export default Accueil;
