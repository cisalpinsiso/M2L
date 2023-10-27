import * as React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Modal from "../components/Modal";


function Navbar() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let user = null;

  return (
    <>
      <Modal title="Connexion" show={openLogin} onClose={() => setOpenLogin(false)}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-2" />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" />
        <button type="button" class="btn btn-primary">Connexion</button>
      </Modal>

      <Modal title="Inscription" show={openRegister} onClose={() => setOpenRegister(false)}>
        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control mb-2" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-2" />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" />
        <button type="button" class="btn btn-primary">Inscription</button>
      </Modal>

      <nav>
        <div className="topnav">
          <img src="src/assets/Logo2.png" className="" alt="" />

          <NavLink to="/">
            <button class="btn">
              <i class="bi bi-house-fill"></i>
              Accueil
            </button>
          </NavLink>
          <NavLink to="/boutique">
            <button class="btn">
              <i class="bi bi-cart-fill"></i>
              Boutique
            </button>
          </NavLink>
        </div>

        <div className="bottomnav">
          {user ?
            <>
              <button type="button" class="btn btn-secondary">
                <i class="bi bi-person-fill"></i>
                Mon compte
              </button>
              <button type="button" class="btn btn-warning">
                <i class="bi bi-box-arrow-right" color="white"></i>
                Deconnexion
              </button>
            </>
          :
            <>
              <button type="button" class="btn btn-secondary" onClick={() => setOpenLogin(true)}>
                <i class="bi bi-box-arrow-in-right"></i>
                Connexion
              </button>
              <button type="button" class="btn btn-secondary" onClick={() => setOpenRegister(true)}>
                <i class="bi bi-person-plus-fill"></i>
                Inscription
              </button>
            </>
          } 
        </div>
      </nav>
    </>
  );
}

export default Navbar;
