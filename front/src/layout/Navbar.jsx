import * as React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [user, setuser] = "Hassan";
  return (
    <>
      <nav className="nav">
        <div className="topnav">
          <img src="src/assets/Logo2.png" className="" alt="" />

          <NavLink to="/">
            <button class="btn btn-secondary">
              <i class="bi bi-house"></i>
              Accueil
            </button>
          </NavLink>
          <NavLink to="/boutique">
            <button class="btn btn-secondary">
              <i class="bi bi-cart"></i>
              Boutique
            </button>
          </NavLink>
        </div>

        <div className="bottomnav">
          <button type="button" class="btn btn-secondary">
            <i class="bi bi-person-fill"></i>
            Mon compte
          </button>
          <button type="button" class="btn btn-warning">
            <i class="bi bi-box-arrow-right" color="white"></i>
            Deconnexion
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
