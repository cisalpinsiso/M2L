import React from "react";
import "./monCompte.css"; // Assurez-vous que le style correspond à celui de Navbar
import Modal from "../../components/Modal";
function MonCompte({ user, toggleNavbar }) {
  const [openCommandes, setOpenCommandes] = React.useState(false);
  const [openInformationsPersonelles, setOpenInformationsPersonelles] = React.useState(false);

  const openCommande = () => {
    setOpenCommandes(true);
  }

  const openInformationsPersonelle = () => {
    setOpenInformationsPersonelles(true);
  }
  

  return (
    <>
      <Modal title="Commandes" show={openCommandes} onClose={() => setOpenCommandes(false)}>
        <div>
          <h1>
            test
          </h1>
          <h2>58</h2>
        </div>
      </Modal>
      <Modal title="Informations personnelles" show={openInformationsPersonelles} onClose={() => setOpenInformationsPersonelles(false)}>
        <div>
          <h1>
            test
          </h1>
          <h2>58</h2>
        </div>
      </Modal>
      <nav className="mon-compte-nav">
        <div className="topnav">
          <img src="src/assets/Logo2.png" alt="Logo" />
          <div className="info-compte">
            <h3>{user?.nom}</h3>
            {/* Autres informations du compte */}
          </div>
        </div>

        <div className="bottomnav">
          <button className="btn" onClick={openCommande}>
            <i className="bi bi-pencil-fill"></i> Vos commandes
          </button>
          <button className="btn" onClick={openInformationsPersonelle}>
            <i className="bi bi-shield-lock-fill"></i> informations personnelles
          </button>
          <button className="btn">
            <i className="bi bi-gear-fill"></i> Paramètres
          </button>
          <button className="btn" onClick={toggleNavbar}>
          <i className="bi bi-arrow-left-circle-fill"></i> Retour
          </button>
        </div>
      </nav>
    </>
  );
}

export default MonCompte;