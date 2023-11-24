import * as React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Modal from "../components/Modal";
import api from "../api";
import { useEffect } from "react";


function Navbar(props) {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("")
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const [error, setError] = React.useState("");

  useEffect(() => {
    setError("");
    setNom("");
    setPrenom("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  }, [openLogin, openRegister]);

  const handleLogin = (e) => {
    e.preventDefault();
    api.login(email, password).then((res) => {
      if (res.data.success) {
        api.getUser().then((res) => {
          if (res.data.success) {
            props.setUser(res.data.user);
            setOpenLogin(false);
          }
        })
      } else {
        setError(res.data.message);
      }
    });
  }

  const handleLogout = () => {
    api.logout().then((res) => {
      if (res.data.success) {
        props.setUser(null);
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    api.register(nom, prenom, email, password, passwordConfirm).then((res) => {
      if (res.data.success) {
        api.getUser().then((res) => {
          if (res.data.success) {
            props.setUser(res.data.user);
            setOpenRegister(false);
          }
        })
      } else {
        setError(res.data.message);
      }
    });
  }

  return (
    <>
      <Modal title="Connexion" show={openLogin} onClose={() => setOpenLogin(false)}>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Mot de passe" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="btn btn-primary">Connexion</button>
          {error && <div className="alert alert-danger w-100 mb-0">{error}</div>}
        </form>
      </Modal>

      <Modal title="Inscription" show={openRegister} onClose={() => setOpenRegister(false)}>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nom" className="form-control" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
          <input type="text" placeholder="Prénom" className="form-control" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
          <input type="email" placeholder="Email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Mot de passe" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirmer le mot de passe" className="form-control" name="confirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
          <button type="submit" className="btn btn-primary">Inscription</button>
          {error && <div className="alert alert-danger w-100 mb-0">{error}</div>}
        </form>
      </Modal>

      <div class="overflow-hidden nav-wrapper" style={props.navbarOpen ? { maxWidth: "300px" } : { maxWidth: 0 }} >
        <nav>
          {props.useAlternateNavbar ?
            <>
            <div className="topnav">
              <img src="src/assets/Logo2.png" alt="Logo" />
              <div className="info-compte">
                <h3>{props.user.nom}</h3>
                {/* Autres informations du compte */}
              </div>
            </div>
        
            <div className="bottomnav">
              <NavLink className="btn" to="/commandes">
                <i className="bi bi-pencil-fill"></i> Vos commandes
              </NavLink>
              <NavLink className="btn" to="/informations">
                <i className="bi bi-shield-lock-fill"></i> informations personnelles
              </NavLink>
              <NavLink className="btn" to="/parametres">
                <i className="bi bi-gear-fill"></i> Paramètres
              </NavLink>
              <NavLink className="btn" onClick={() => props.setUseAlternateNavbar(false)}>
                <i className="bi bi-arrow-left-circle-fill"></i> Retour
              </NavLink>
            </div>
            </>
          :
          <>
            <div className="topnav">
              <img src="src/assets/Logo2.png" className="" alt="" />

              <NavLink to="/">
                <button className="btn">
                  <i className="bi bi-house-fill"></i>
                  Accueil
                </button>
              </NavLink>
              <NavLink to="/boutique">
                <button className="btn">
                  <i className="bi bi-cart-fill"></i>
                  Boutique
                </button>
              </NavLink>
            </div>

              <div className="bottomnav">
                {props.user ?
                  <>
                    <button type="button" className="btn btn-secondary" onClick={() => props.setUseAlternateNavbar(true)}>
                      <i className="bi bi-person-fill"></i>
                      Mon compte
                    </button>
                    <button type="button" className="btn btn-warning" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right" color="white"></i>
                      Deconnexion
                    </button>
                  </>
                  :
                  <>
                    <button type="button" className="btn btn-secondary" onClick={() => setOpenLogin(true)}>
                      <i className="bi bi-box-arrow-in-right"></i>
                      Connexion
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => setOpenRegister(true)}>
                      <i className="bi bi-person-plus-fill"></i>
                      Inscription
                    </button>
                  </>
                }
              </div>
            </>
          }

        </nav>
      </div>
    </>
  );
}

export default Navbar;
