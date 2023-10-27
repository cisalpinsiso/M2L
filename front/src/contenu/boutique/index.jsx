import "./boutique.css";
import Produit from "./produit";

function Boutique() {
  return (
    <>
      <div className="firstblock">
        <h3>Bonjour, <b>Hassan</b></h3>
        <i class="bi bi-cart-fill"></i>
      </div>
      <div className="deproduits">
        <div>
          <h4>Decouvrez notre <b>nouvelle gamme de produits</b> !</h4>
          <a href="">
            Voir les produits <i class="bi bi-arrow-right"></i>
          </a>
        </div>
        <img src="src/assets/KAPPA.png" className="" alt="" />
      </div>
      <form>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
          <i class="bi bi-search"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Rechercher un produit ..."
            aria-label="Search"
            aria-describedby="basic-addon1"
          ></input>
        <select class="custom-select mr-sm-2 form-control" id="inlineFormCustomSelect">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>
      </form>
      <Produit></Produit>
    </>
  );
}

export default Boutique;
