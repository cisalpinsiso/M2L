import "./boutique.css";
import Produit from "./produit";

function Boutique() {
  return (
    <>
      <div className="firstblock">
        <h1>Bonjour, Hassan</h1>
        <i class="bi bi-cart"></i>
      </div>
      <div>
        <div className="deproduits">
          <div>
            <h3>Decouvrez notre nouvelle gamme de produits !</h3>
            <a href="">
              Voir les produits <i class="bi bi-arrow-right"></i>
            </a>
          </div>
          <img src="src/assets/KAPPA.png" className="" alt="" />
        </div>
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
        </div>
        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </form>
      <Produit></Produit>
    </>
  );
}

export default Boutique;
