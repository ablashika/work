import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/mainPage/Home";
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";

import Routers from "./component/Router";
function App() {
  return (
        <Container fluid>
          <Row>
            <Col md={12}>
            <Home/>
            </Col>
           </Row>
        </Container>

         )
}
export default App;
