import { Row, Col } from "react-bootstrap";
import SingleQueryModal from "../../components/SingleQuery/Modal";
import ConvoChainModal from "../../components/ConvoChain/Modal";
import TalkToPDF from "../../components/TalkToPDF/Modal";

const Dashboard = () => {

  return (
    <>
    <h1>Welcome To Dashboard</h1>
    <Row className="m-0 p-0 d-flex">
        <Col lg={1}/>
        <Col lg={3}>
            <SingleQueryModal/>
        </Col>
        <Col lg={1}/>
        <Col lg={3}>
            <ConvoChainModal/>
        </Col>
        <Col lg={1}/>
        <Col lg={2}>
            <TalkToPDF/>
        </Col>
        <Col lg={1}/>
    </Row>
    </>
  );
};

export default Dashboard;
