import Accueil from "./accueil";
import Boutique from "./boutique";
import "./partiedroite.css" ;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Contenu() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/boutique" element={<Boutique />} />
          </Routes>
        </Router>
      );
}

export default Contenu;