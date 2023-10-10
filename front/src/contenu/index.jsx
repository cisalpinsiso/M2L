import Accueil from "./accueil";
import Boutique from "./boutique";
import "./partiedroite.css" ;
import { Routes, Route } from "react-router-dom";

function Contenu() {
    return (
        <div className="contenu">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/boutique" element={<Boutique />} />
          </Routes>
        </div>
      );
}

export default Contenu;