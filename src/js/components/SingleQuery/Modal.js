import React, { useState } from "react";
import { Button, Modal, Row, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from "../../Message";

import { dataManagementService } from "../../../services/DataManagementService";

//css
import "./modal.css";

let nextId = 0;

const SingleQueryModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  const askQuestion = (event) => {
    let question = event.target.value
    let usermessage = {
      "id": nextId++,
      "message": question,
      "origin": "Human"
    }
    dataManagementService.askSingleQuery(question)
      .then((response) => {
        let aimessage = {
          "id": nextId++,
          "message": response.data.data,
          "origin": "AI"
        }
        setMessages([
          usermessage,
          aimessage,
          ...messages
        ])
      })
      .catch(error => {
        console.error('Error fetching the response:', error);
    });
  }

  return (
    <>
      <div className="button-div">
        <button className="button-4" onClick={handleShow}>Single Query</button>
        <div className="button-text-box">
          Looking for a conversation with someone who's carefree and goes with the flow?
          <br></br>
          <br></br>
          Look no further - that's me!
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog-responsive"
      >
        <Modal.Header closeButton>Single Query</Modal.Header>
        <Modal.Body className="modal-body-responsive custom-modal-body">
          <Row>
            <Form.Group className="mb-3" controlId="input">
              <Form.Label>Let's ask some questions.</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                // bind a keyup event listener on the input element
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                      askQuestion(event)
                  }
                }}
              />
            </Form.Group>
          </Row>
          <Row>
            <React.Fragment>
              {
                messages.map(element => {
                  return (
                    <Row key={element.id}>
                      <Message key={element.id} origin={element.origin} message={element.message}/>
                    </Row>
                  )
                })
              }
            </React.Fragment>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleQueryModal;
