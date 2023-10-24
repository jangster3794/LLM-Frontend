import { Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <div className="container-fluid">
          <Row>
            <Header />
            <div className="main-container">
              <Row>
                <Col className="m-0 p-0" style={{ maxHeight: '85vh', overflowY: 'auto' }}>
                  {props.children}
                </Col>
              </Row>
            </div>
            <Footer />
          </Row>
      </div>
    </>
  )
};

export default Layout;