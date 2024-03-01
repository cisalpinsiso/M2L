import React, { useState, useRef, useEffect } from "react";
import "./boutique.css";
import Produit from "./Produit";
import api from "../../api";

function Boutique(props) {
  const [filterSelection, setFilterSelection] = useState("all");
  const [filterText, setFilterText] = useState("");

  const searchRef = useRef(null);

  const products = props.produits;

  const sizePanier = props.panier.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <>
      <div className="firstblock">
        <h3>
          Bonjour, <b>{props.user ? props.user.nom : "utilisateur"}</b>
        </h3>
        <i
          className="bi bi-cart-fill cart position-relative"
          onClick={() => props.setShowCart(!props.showCart)}
        >
          {sizePanier > 0 && (
            <span className="badge bg-primary rounded-pill position-absolute">
              {sizePanier}
            </span>
          )}
        </i>
      </div>
      <div ref={searchRef}>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher un produit ..."
              aria-label="Search"
              aria-describedby="basic-addon1"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <select
              className="custom-select mr-sm-2 form-control"
              value={filterSelection}
              onChange={(e) => setFilterSelection(e.target.value)}
            >
              <option value="all" selected>
                Choose...
              </option>
              <option value="maillot">Maillots</option>
              <option value="équipement">Équipements</option>
              <option value="foot">Football</option>
            </select>
          </div>
        </form>
      </div>
      <div className="d-grid gap-3 produits">
        {products && products
          .filter((product) => {
            if (filterSelection === "all") {
              return true;
            } else {
              return (
                product.description
                  .toLowerCase()
                  .includes(filterSelection.toLowerCase()) ||
                product.nom
                  .toLowerCase()
                  .includes(filterSelection.toLowerCase())
              );
            }
          })
          .filter((product) => {
            return (
              product.nom.toLowerCase().includes(filterText.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(filterText.toLowerCase())
            );
          })
          .map((product) => (
            <Produit
              nom={product.nom}
              description={product.description}
              prix={product.prix}
              image={product.image}
              id={product.id}
              ajoutPanier={() => ajoutPanier(product)}
            />
          ))}
      </div>
    </>
  );
}

export default Boutique;
