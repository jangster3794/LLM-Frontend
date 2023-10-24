import React, { useRef, useState } from "react";
import { Button, Modal, Row, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from "../../Message";

import { dataManagementService } from "../../../services/DataManagementService";

//css
import "./modal.css";

let nextId = 0;

const TalkToPDF = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const uploadFileRef = useRef(null);

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
    dataManagementService.talkToPDF(question)
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

  const handleClick = (event) => {
    const formData = new FormData();
    let file = uploadFileRef.current?.files[0]
    formData.append("file", file);

    dataManagementService.uploadPDFFile(formData)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log("In Error: ", error)
    })
  }

  const handleFileUpload = () => {
    setIsDisabled(false)
  }

  return (
    <>
      <Button onClick={handleShow}>TalkToPDF</Button>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog-responsive"
      >
        <Modal.Header closeButton>Talk To PDF</Modal.Header>
        <Modal.Body className="modal-body-responsive">
          <Row>
            <Form.Group className="mb-3" controlId="input">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload PDF File</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileUpload}
                  ref={uploadFileRef}
                />
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleClick}
                  disabled={isDisabled}
                >
                  Submit
                </Button>
              </Form.Group>
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

export default TalkToPDF;
