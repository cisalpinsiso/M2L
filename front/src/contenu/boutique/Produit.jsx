import React from "react";
import "./produit.css";
import { Link } from "react-router-dom";

function Produit(props) {
  return (
    <div className="card produit w-100">
      <img src={props.image} className="card-img-top" alt="..."></img>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.nom}</h5>
        <p className="card-text">
          {props.prix}€
        </p>
        <Link to={`/produit/${props.id}`} className="btn btn-primary mt-auto">
          Voir le produit
        </Link>
      </div>
    </div>
  );
}

export default Produit;
