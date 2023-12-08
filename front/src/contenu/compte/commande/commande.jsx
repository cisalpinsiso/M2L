import React, { useState, useEffect } from "react";
import api from "../../../api";

const CommandePage = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    const fetchCommandes = () => {
      api
        .getCommandes()
        .then((response) => {
          if (response.data) {
            setCommandes(response.data.commands);
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des commandes:", error);
        });
    };

    fetchCommandes();
  }, []);
  console.log(commandes);
  console.log(commandes.produits);
  return (
    <div>
      {commandes &&
        commandes.map((commande, index) => (
          <div key={index}>
            <p>Commande ID: {commande.id}</p>
            <p>Date: {commande.date}</p>
            <p>Produits:</p>
            <ul>
              {commande.produits.map((product, index) => (
                <li key={index}>
                  <p>{product.prix}</p>
                  {product.name} x {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default CommandePage;
