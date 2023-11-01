import React from "react";
import "./produit.css";

function produit() {
  let url =
    "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit";
  let descritpion =
    " Some quick example text to build on the card title and make up the bulk of the card's content.";
  let titre = "T-shirt";
    return (
    <>
      <div className="packcard">
        <div class="card">
          <img src={url} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{titre}</h5>
            <p class="card-text">
              {descritpion}
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img src={url} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img src={url} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default produit;
