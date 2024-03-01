import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";

function ProduitPage(props) {
  const { id } = useParams(); // Récupérer l'ID de l'URL
  const [produit, settProduit] = useState(null);

  useEffect(() => {
    api.getProduit(id).then((response) => {
      if (response.data) {
        settProduit(response.data.product);
      }
    });
  }, [id]);


  if (!produit) return <div>Aucun produit sélectionné</div>;

  const toggleLike = () => {
    if (produit.isLikedByUser) {
      api.dislikeProduit(id).then();
    } else {
      api.likeProduit(id).then();
    }

    api.getProduit(id).then((response) => {
      if (response.data) {
        settProduit(response.data.product);
      }
    });
  }

  const sizePanier = props.panier.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <div className="containerArticleUrl">
      <h5 style={{display: "flex"}}>
        <Link to="/boutique">
          <i className="bi bi-arrow-left"></i> Retour aux produits
        </Link>
        <i
          className="bi bi-cart-fill cart position-relative"
          onClick={() => props.setShowCart(!props.showCart)}
          style={{marginLeft: "auto"}}
        >
          {sizePanier > 0 && (
            <span className="badge bg-primary rounded-pill position-absolute">
              {sizePanier}
            </span>
          )}
        </i>
      </h5>
      <img
        className="imageArticleUrl"
        src={produit.image}
        alt={`Article titled: ${produit.nom}`}
      />
      <h2 className="titreArticleUrl">{produit.nom}</h2>
      <p>{produit.texte}</p>
      <p>{produit.description}</p>
      <div style={{ gap: "10px", display: "flex", marginTop: "20px" }}>
        <button className="btn btn-primary" onClick={() => props.ajoutPanier(produit)}><i className="bi bi-cart-fill" style={{marginRight: "10px"}}></i>Ajouter au panier</button>
        {props.user &&
          (produit.isLikedByUser ?
            <button className="btn btn-danger" onClick={toggleLike}><i className="bi bi-heart-fill" style={{marginRight: "10px"}}></i>Disliker ({produit.likes})</button>
            :
            <button className="btn btn-primary" onClick={toggleLike}><i className="bi bi-heart" style={{marginRight: "10px"}}></i>Liker ({produit.likes})</button>
          )
        }
      </div>
    </div>
  );
}

export default ProduitPage;
