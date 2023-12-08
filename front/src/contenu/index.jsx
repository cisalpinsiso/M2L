import { useState } from "react";
import Accueil from "./accueil";
import Boutique from "./boutique";
import "./partiedroite.css";
import { Routes, Route } from "react-router-dom";
import Compte from "./compte";
import Matchs from "./matchs";
import Article from "./accueil/article/article";

function Contenu(props) {
  const [panier, setPanier] = useState([]);

  return (
    <div className="contenu">
      <Routes>
        <Route path="/" element={<Accueil equipes={props.equipes} articles={props.articles} />} />
        <Route path="/boutique" element={<Boutique user={props.user} panier={panier} setPanier={setPanier} />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/matchs" element={<Matchs equipes={props.equipes} />} />
      </Routes>
    </div>
  );
}

export default Contenu;