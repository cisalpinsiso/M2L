import * as React from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [user, setuser] = "Hassan";
  return (
    <>
      <nav className="nav">
        <div className="topnav">
          <img src="src/assets/Logo2.png" className="" alt="" />

          <button className="btn btn-primary" type="submit">
            Button
          </button>
          <button variant="outlined">Boutique</button>
        </div>

        <div className="bottomnav">
          <button onClick={handleOpen}>{user}</button>
          <div className="modal"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div sx={style}>
              <h6 id="modal-modal-title" variant="h6" component="h2">
                {user}
              </h6>
              <p id="modal-modal-description" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                rem reiciendis fuga sed ut tempore minus, dignissimos,
                praesentium voluptatibus natus magni cumque laborum nesciunt
                fugit nam. Veniam voluptates ut qui?
              </p>
            </div>
          </div>

          <button variant="contained">
          <i className="bi bi-0-square"></i>
 Deconnexion
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
