import Accueil from "./accueil";
import Boutique from "./boutique";
import "./partiedroite.css" ;
import { Routes, Route } from "react-router-dom";

function Contenu(props) {
    return (
        <div className="contenu">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/boutique" element={<Boutique user={props.user} />} />
          </Routes>
        </div>
      );
}

export default Contenu;