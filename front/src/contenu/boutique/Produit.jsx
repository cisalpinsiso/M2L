import React from "react";
import "./produit.css";

function Produit(props) {
  return (
    <div className="card flex-grow-1">
      <img src={props.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.nom}</h5>
        <p className="card-text">
          {props.description}
        </p>
        <a href="#" className="btn btn-primary" onClick={() => props.ajoutPanier()}>
          Ajouter au panier
        </a>
      </div>
    </div>
  );
}

export default Produit;
