import { Row, Col } from "react-bootstrap";
import SingleQueryModal from "../../components/SingleQuery/Modal";
import ConvoChainModal from "../../components/ConvoChain/Modal";
import TalkToPDF from "../../components/TalkToPDF/Modal";

const Dashboard = () => {

  return (
    <>
    <Row className="dashboard-header">
      <Row className="header-title">
        Ask me a question.
      </Row>
    </Row>
    <Row className="m-0 p-0 d-flex justify-content-center">
        <Col lg={3}>
          <SingleQueryModal/>
        </Col>
        <Col lg={3}>
          <ConvoChainModal/>
        </Col>
        <Col lg={3}>
          <TalkToPDF/>
        </Col>
    </Row>
    </>
  );
};

export default Dashboard;
