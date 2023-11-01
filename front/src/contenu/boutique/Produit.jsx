import React from "react";
import "./produit.css";

function Produit(props) {
  return (
    <div class="card flex-grow-1">
      <img src={props.image} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{props.nom}</h5>
        <p class="card-text">
          {props.description}
        </p>
        <a href="#" class="btn btn-primary" onClick={() => props.ajoutPanier()}>
          Ajouter au panier
        </a>
      </div>
    </div>
  );
}

export default Produit;
