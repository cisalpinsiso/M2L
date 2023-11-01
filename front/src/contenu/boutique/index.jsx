import React, { useState, useRef, useEffect } from "react";
import "./boutique.css";
import Produit from "./Produit";

function Boutique(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  const products = [
    {
      name: "Produit A",
      img: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
    },
    {
      name: "Produit B",
      img: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
    },
    {
      name: "Produit C",
      img: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
    },
    {
      name: "Produit D",
      img: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
    },
  ];

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

  return (
    <>
      <div className="firstblock">
        <h3>
          Bonjour, <b>{props.user ? props.user.nom : "utilisateur"}</b>
        </h3>
        <i className="bi bi-cart-fill"></i>
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
      <Produit />
    </>
  );
}

export default Boutique;
