import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./compte.css";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Compte(props) {
  console.log(props.user);
  return (
    <div className="compte">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <i className="bi bi-person-circle"></i>
            Paramètres
          </Accordion.Header>
          <Accordion.Body>
            <h4>
              Fonction : <strong>{props.user.fonction}</strong>
            </h4>
            <Form>
              <Form.Group
                className="mb-3 w-50"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address Email</Form.Label>
                <Form.Control type="email" placeholder={props.user.email} />
                <Form.Label>Nom</Form.Label>
                <Form.Control type="" placeholder={props.user.mdp} />
                <Form.Label>Prenom</Form.Label>
                <Form.Control type="email" placeholder={props.user.prenom} />
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                {/* <Form.Control value={props.user.password} type="password" /> */}
                <div className="display-flex">
                  <Button className="w-50" variant="primary">
                    Modifier
                  </Button>{" "}
                  <Form.Text id="passwordHelpBlock" muted>
                    hello bitch dab tema le dab
                  </Form.Text>
                </div>
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="Accordion.Item" eventKey="1">
          <Accordion.Header>
            <i className="bi bi-box"></i>
            Commandes
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <i className="bi bi-android"></i>
            Application
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <i className="bi bi-android"></i>
            Application
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="basdepage">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FEC817"
            fill-opacity="1"
            d="M0,160L80,160C160,160,320,160,480,181.3C640,203,800,245,960,224C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Compte;
