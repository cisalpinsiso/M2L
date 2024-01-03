import React, { useEffect } from "react";
import "./compte.css";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CommandePage from "./commande/commande";
import api from "../../api";

function Compte(props) {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  // Mise à jour de l'état local lorsque les props changent
  useEffect(() => {
    if (props.user) {
      setEmail(props.user.email || "");
      setNom(props.user.nom || "");
      setPrenom(props.user.prenom || "");
    }
  }, [props.user]);

  const handleChange = (updateFunc) => (e) => {
    updateFunc(e.target.value);
    setModifie(true);
  };
  const changementdemotdepasse = () => {
    setMdpodifie(true);
  };
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
              Fonction :{" "}
              <strong className="fonctionjoueur">
                {props.user && props.user.fonction}
              </strong>
            </h4>
            <div className="d-flex ">
              <Form>
                <Form.Group
                  className="mb-3 w-100 p-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Adresse Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleChange(setEmail)}
                    name="email"
                  />

                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    value={nom}
                    onChange={handleChange(setNom)}
                    name="nom"
                  />

                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    value={prenom}
                    onChange={handleChange(setPrenom)}
                    name="prenom"
                  />
                  <Button
                    variant="primary"
                    onClick={() => {
                      api.updateUser(nom, prenom, email).then((res) => {
                        const data = res.data;
                        alert(data.message)
                      });
                    }}
                    className="fade-in mt-4 w-50"
                  >
                    Confirmer
                  </Button>
                </Form.Group>
              </Form>
              <div className="petittraitaccount"></div>
              <Form>
                <Form.Group
                  className="mb-3 w-100 p-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="fade-in">
                    <Form.Label>Ancien mot de passe </Form.Label>
                    <Form.Control
                      value={oldPassword}
                      onChange={handleChange(setOldPassword)}

                      type="password" />

                    <Form.Label>Nouveau mot de passe</Form.Label>
                    <Form.Control
                      value={newpassword}
                      onChange={handleChange(setNewPassword)}
                      type="password" />
                    <Form.Label
                    >Confirmer le nouveau mot de passe</Form.Label>
                    <Form.Control
                      value={confirmpassword}
                      onChange={handleChange(setConfirmPassword)}
                      type="password" />
                    <Button
                      variant="primary"
                      onClick={() => {
                        api.updatePassword(oldPassword, newpassword, confirmpassword).then((res) => {
                          const data = res.data;
                          alert(data.message)
                        });
                      }}
                      className=" mt-4 w-50"
                    >
                      Confirmer
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="Accordion.Item" eventKey="1">
          <Accordion.Header>
            <i className="bi bi-box"></i>
            Commandes
          </Accordion.Header>
          <Accordion.Body>
            <CommandePage />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <i className="bi bi-android"></i>
            Application
          </Accordion.Header>
          <Accordion.Body>
            En cours de développement
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div >
  );
}

export default Compte;
