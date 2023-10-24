import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from "../../Message";

import { dataManagementService } from "../../../services/DataManagementService";

//css
import "./modal.css";

let nextId = 0;

const ConvoChainModal = () => {
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
    dataManagementService.askConvoChain(question)
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
        console.log(messages)
      })
      .catch(error => {
        console.error('Error fetching the file:', error);
    });
  }

  useEffect(()=>{
    dataManagementService.getConvoChain()
    .then((response)=>{
      if (response.data.data){
        let usermessage = {
          "id": nextId++,
          "message": "Aggregated Historical Messages: " + response.data.data,
          "origin": "Human"
        }
        setMessages([
          usermessage,
          ...messages
        ])
      }
    })
  }, [])

  return (
    <>
      <Button onClick={handleShow}>Convo Chain</Button>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog-responsive"
      >
        <Modal.Header closeButton />
        <Modal.Body className="modal-body-responsive">
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

export default ConvoChainModal;
