import "./boutique.css";



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
            <h2>Decouvrez notre nouvelle gamme de produits !</h2>
            <a href="">
              Voir les produits <i class="bi bi-arrow-right"></i>
            </a>
          </div>
          <img src="src/assets/foot.png"className="" alt="" />
        </div>
      </div>
     
    </>
  );
}

export default Boutique;
