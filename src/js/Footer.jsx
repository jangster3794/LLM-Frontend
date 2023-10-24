import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Row className="footer m-0">
      <Col xs={9} className="d-flex justify-content-start">
        This is a footer
      </Col>
      <Col xs={3} className="d-flex justify-content-end">
        Version: 1.2.20231020
      </Col>
    </Row>
  )
}

export default Footer;