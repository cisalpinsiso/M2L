import React, { useState, useRef, useEffect } from "react";
import "./boutique.css";
import Produit from "./Produit";

function Boutique(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const searchRef = useRef(null);

  const products = [
    {
      id: 1,
      nom: "Produit A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.",
      image: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
    },
    {
      id: 2,
      nom: "Produit B",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.",
      image: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
    },
    {
      id: 3,
      nom: "Produit C",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.",
      image: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
    },
    {
      id: 4,
      nom: "Produit D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.",
      image: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
    },
  ];

  const ajoutPanier = (productToAdd) => {
    const existingProduct = props.panier.find(p => p.id === productToAdd.id);

    if (existingProduct) {
      const newPanier = props.panier.map(p =>
        p.id === productToAdd.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      props.setPanier(newPanier);
    } else {
      props.setPanier([...props.panier, { ...productToAdd, quantity: 1 }]);
    }
  };

  const retirerPanier = (productToRemove) => {
    const existingProduct = props.panier.find(p => p.id === productToRemove.id);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        const newPanier = props.panier.map(p =>
          p.id === productToRemove.id ? { ...p, quantity: p.quantity - 1 } : p
        );
        props.setPanier(newPanier);
      } else {
        const newPanier = props.panier.filter(p => p.id !== productToRemove.id);
        props.setPanier(newPanier);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const matchedSuggestions = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matchedSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  const sizePanier = props.panier.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <>
      <div className="firstblock">
        <h3>
          Bonjour, <b>{props.user ? props.user.nom : "utilisateur"}</b>
        </h3>
        <i className="bi bi-cart-fill cart position-relative" onClick={() => setShowCart(!showCart)}>
          {sizePanier > 0 && <span className="badge bg-primary rounded-pill position-absolute">{sizePanier}</span>}
        </i>
      </div>
      <div className={`offcanvas-backdrop fade ${showCart ? "show" : "pe-none"}`}></div>
      <div class={`offcanvas offcanvas-end ${showCart ? "show" : "hiding"} z-index-1`} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Panier</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setShowCart(false)}></button>
        </div>
        <div class="offcanvas-body">
          {props.panier.length === 0 ?
            <div className="text-center">Votre panier est vide</div>
            :
            <div>
              <ul className="list-group position-relative">
                {props.panier.map((product) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <img src={product.image} alt={product.nom} style={{ width: "24px", marginRight: "10px" }} />
                    {product.nom}
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn" onClick={() => retirerPanier(product)}>
                        <i class="bi bi-dash-circle-fill"></i>
                      </button>
                      <button type="button" class="btn" onClick={() => ajoutPanier(product)}>
                        <i class="bi bi-plus-circle-fill"></i>
                      </button>
                    </div>
                    <span className="badge bg-primary rounded-pill">{product.quantity}</span>
                  </li>
                ))}
              </ul>
              <button type="button" class="btn btn-primary mt-3 w-100">Commander</button>
            </div>
          }
        </div>
      </div>
      <div className="deproduits">
        <div>
          <h4>
            Decouvrez notre <b>nouvelle gamme de produits</b> !
          </h4>
          <a href="">
            Voir les produits <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <img src="src/assets/KAPPA.png" className="" alt="" />
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
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <ul>
              {suggestions.map((product) => (
                <li key={product.name}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{ width: "24px", marginRight: "10px" }}
                  />
                  {product.name}
                </li>
              ))}
            </ul>
            <select
              className="custom-select mr-sm-2 form-control"
              id="inlineFormCustomSelect"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </form>
      </div>
      <div className="d-flex flex-wrap gap-4">
        {products.map((product) => (
          <Produit nom={product.nom} description={product.description} image={product.image} id={product.id} ajoutPanier={() => ajoutPanier(product)} />
        ))}
      </div>
    </>
  );
}

export default Boutique;
