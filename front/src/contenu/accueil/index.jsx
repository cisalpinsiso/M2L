import "./accueil.css"

function Accueil() {
  return (
      <div>
        <h1>Accueil</h1>


        <div class="row d-flex  mb-3">
          <div class="col-sm-8 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Titre</h5>
                <div className="d-flex">
                  <img src="https://sacres-francais.fr/wp-content/uploads/2021/06/affiche-france-stade-de-la-beaujoire-nantes-3.jpg" alt="" className="card-img-top mr-auto p-2" style={{width: '50%', height: '50%'}} />
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iste. Tempore, iste quisquam quidem eum vel obcaecati minima aut molestiae nobis, repudiandae quia cum, nesciunt soluta eos facilis et repellat.
                  Quasi fugiat repudiandae, laboriosam provident doloremque, officiis vel ratione cumque odit totam eligendi, voluptas voluptatibus et tempore! Praesentium sint id voluptatum repellendus placeat ad minus, ratione facere in delectus. Tenetur.
                  Aut, velit ducimus. Aspernatur, necessitatibus vel voluptates odio voluptas delectus fugiat tenetur omnis accusamus deleniti alias quia! Et iure laborum fuga dolores corrupti facilis.....</p>
                </div>
                
                <a href="#" class="btn btn-primary btnAccueil">En savoir plus</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Notifications</h5>
                <hr />
                <div className="d-flex">
                  <h6> actu</h6>
                  <p className="font-custom">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Autem quas, ea nemo atque totam minima rerum optio...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Titre</h5>
                <img src="https://www.lapassiondesbleus.com/wp-content/uploads/2023/09/maillots-du-XV-de-france-pas-cher-768x768.jpg" alt="" className="card-img" />
                <p class="card-text">Description</p>
                <a href="#" class="btn btn-primary btnAccueil">En savoir plus</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Titre</h5>
                <img src="https://www.lapassiondesbleus.com/wp-content/uploads/2023/09/maillots-du-XV-de-france-pas-cher-768x768.jpg" alt="" className="card-img" />
                <p class="card-text">Description</p>
                <a href="#" class="btn btn-primary btnAccueil">En savoir plus</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Titre</h5>
                <img src="https://www.lapassiondesbleus.com/wp-content/uploads/2023/09/maillots-du-XV-de-france-pas-cher-768x768.jpg" alt="" className="card-img" />
                <p class="card-text">Description</p>
                <a href="#" class="btn btn-primary btnAccueil">En savoir plus</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default Accueil;