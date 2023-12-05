
import React, { useState, useEffect } from "react";
import "./accueil.css";

import Carrousel from "./carousel";
import Article from "./article/article";

function Accueil(props) {

  return (
    <>
    <Carrousel />
    <Article />
    </>
  );
}

export default Accueil;
