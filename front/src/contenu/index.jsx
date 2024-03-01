import { useState } from "react";
import Accueil from "./accueil";
import Boutique from "./boutique";
import "./partiedroite.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Compte from "./compte";
import Matchs from "./matchs";
import ArticleUrl from "./accueil/articleUrl/articleurl";
import ProduitPage from "./boutique/produitPage";

function Contenu(props) {
  const [panier, setPanier] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const ajoutPanier = (productToAdd) => {
    const existingProduct = panier.find((p) => p.id === productToAdd.id);

    if (existingProduct) {
      const newPanier = panier.map((p) =>
        p.id === productToAdd.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setPanier(newPanier);
    } else {
      setPanier([...panier, { ...productToAdd, quantity: 1 }]);
    }
  };

  const retirerPanier = (productToRemove) => {
    const existingProduct = panier.find(
      (p) => p.id === productToRemove.id
    );

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        const newPanier = panier.map((p) =>
          p.id === productToRemove.id ? { ...p, quantity: p.quantity - 1 } : p
        );
        setPanier(newPanier);
      } else {
        const newPanier = panier.filter(
          (p) => p.id !== productToRemove.id
        );
        setPanier(newPanier);
      }
    }
  };

  const commander = () => {
    api
      .newCommande(
        JSON.stringify(
          panier.map((p) => ({ id: p.id, quantity: p.quantity }))
        )
      )
      .then((response) => {
        if (response.data) {
          setPanier([]);
        }
      });
  };

  const prixTotal = panier && panier.reduce(
    (acc, product) => acc + product.prix * product.quantity,
    0
  );

  return (
    <div className="contenu">
      <Routes>
        <Route path="/" element={<Accueil equipes={props.equipes} articles={props.articles} />} />
        <Route path="/boutique" element={<Boutique user={props.user} panier={panier} setPanier={setPanier} produits={props.produits} ajoutPanier={ajoutPanier} retirerPanier={retirerPanier} setShowCart={setShowCart} showCart={showCart} />} />
        <Route path="/compte" element={props.user ? <Compte user={props.user} panier={panier} setPanier={setPanier} /> : (props.user === null ? <Navigate to="/" /> : <></>)} />
        <Route path="/matchs" element={<Matchs equipes={props.equipes} />} />
        <Route path="/article/:id" element={<ArticleUrl articles={props.articles}/>} />
        <Route path="/produit/:id" element={<ProduitPage produits={props.produits} panier={panier} setPanier={setPanier} ajoutPanier={ajoutPanier} retirerPanier={retirerPanier} setShowCart={setShowCart} showCart={showCart} user={props.user} /> } />
      </Routes>
      <div
        className={`offcanvas-backdrop fade ${showCart ? "show" : "pe-none"}`}
      ></div>
      <div
        className={`offcanvas offcanvas-end ${
          showCart ? "show" : "hiding"
        } z-index-1`}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Panier
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setShowCart(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          {panier.length === 0 ? (
            <div className="text-center">Votre panier est vide</div>
          ) : (
            <div>
              <ul className="list-group position-relative">
                {panier.map((product) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <img
                      src={product.image}
                      alt={product.nom}
                      style={{ width: "24px", marginRight: "10px" }}
                    />
                    {product.nom}
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn"
                        onClick={() => retirerPanier(product)}
                      >
                        <i className="bi bi-dash-circle-fill"></i>
                      </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => ajoutPanier(product)}
                      >
                        <i className="bi bi-plus-circle-fill"></i>
                      </button>
                    </div>
                    <span className="badge bg-primary rounded-pill">
                      {product.quantity}
                    </span>
                  </li>
                ))}
              </ul>
              {props.user ? (
                <div>
                  <div className="text-center mt-3">
                    Prix total : {prixTotal} €
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 w-100"
                    onClick={() => commander()}
                  >
                    Commander
                  </button>
                </div>
              ) : (
                <div className="text-center mt-3">
                  Veuillez vous connecter pour commander
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contenu;