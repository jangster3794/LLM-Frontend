import React, { useRef, useState } from "react";
import { Button, Modal, Row, Form, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from "../../Message";

import greentick from "../../../assets/greentick.png"
import { dataManagementService } from "../../../services/DataManagementService";

//css
import "./modal.css";

let nextId = 0;

const TalkToPDF = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isInitialised, setIsInitialised] = useState(false);

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
      setIsInitialised(true)
    })
    .catch((error)=>{
      console.log("In Error: ", error)
    })
  }

  const handleFileUpload = () => {
    setIsDisabled(false)
  }

  const handleReset = () => {
    setMessages([])
    setIsInitialised(false)
    setIsDisabled(true)
    uploadFileRef.current.value = ""
  }

  return (
    <>
      <div className="button-div">
        <button className="button-4" onClick={handleShow}>TalkToPDF</button>
        <div className="button-text-box">
          <div className="info-text">
            Need to extract insights from a PDF? Whether it's for research, learning, or just because you're feeling lazy and want a summary,
            <br></br>
            <br></br>
            I've got you covered!
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog-responsive"
      >
        <Modal.Header closeButton>Talk To PDF</Modal.Header>
        <Modal.Body className="modal-body-responsive custom-modal-body">
          <Row className="d-flex m-0">
            <Form.Group className="mb-3" controlId="input">
              <Row>
                <Form.Group controlId="formFile" className="mb-3 d-flex">
                  <Col lg={3}>
                    <Form.Label>Upload PDF File and click on submit</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="file"
                      onChange={handleFileUpload}
                      ref={uploadFileRef}
                    />
                  </Col>
                  <Col lg={3}>
                    {
                      isInitialised?
                        <div className="button-div">
                          <button className="button-4"
                            disabled={true}
                          >
                            <img style={{"width": "20px"}} src={greentick}/>
                            Initialised
                          </button>
                        </div>
                      :
                      <div>
                        <div className="button-div">
                          <button className="button-4"
                            onClick={handleClick}
                            disabled={isDisabled}
                          >Initialise Store</button>
                        </div>
                      </div>
                    }

                  </Col>
                </Form.Group>
              </Row>
              {
                isInitialised?
                  <Row>
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
                  </Row>
                :
                  <Row>
                    Please upload a PDF File first
                  </Row>
              }


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
        <Modal.Footer>
            <div className="button-div">
              <button className="button-4" onClick={handleReset}>Reset</button>
            </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TalkToPDF;
