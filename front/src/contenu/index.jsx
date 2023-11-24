import { useState } from "react";
import Accueil from "./accueil";
import Boutique from "./boutique";
import "./partiedroite.css";
import { Routes, Route } from "react-router-dom";
import Compte from "./compte";

function Contenu(props) {
  const [panier, setPanier] = useState([]);

  return (
    <div className="contenu">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/boutique" element={<Boutique user={props.user} panier={panier} setPanier={setPanier} />} />
        <Route path="/compte" element={<Compte />} />
      </Routes>
    </div>
  );
}

export default Contenu;