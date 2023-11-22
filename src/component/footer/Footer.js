import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css"
// import logo from '../../assets/img/logos'; // Make sure to replace this with the correct path to your logo

const Footer = () => {
  return (
    <Row className="footer">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="footer-content">
              <Col xs={12} md={4}>
                <img src="https://codetraingh.com/static/logo-d94ce7c1319195cf5c26fcf85e2fc4da.png" alt="Codetrain" className="logo-img" />
              </Col>
              <Col xs={6} md={4}>
                <h5 className="text-uppercase">Company</h5>
                <ul className="footer-content__links">
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@codetrain">Blog</a>
                  </li>
                  <li>
                    <a href="/#contact">Contact</a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={4}>
                <h5 className="text-uppercase">Follow us</h5>
                <ul className="footer-content__links">
                  <li>
                    <a href="https://web.facebook.com/codetraingh/?_rdc=1&_rdr">
                      <span className="mdi mdi-facebook-box"></span>
                      &nbsp; Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/codetrain/?originalSubdomain=gh">
                      <span className="mdi mdi-linkedin-box"></span>
                      &nbsp; LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/codetraingh?lang=en">
                      <span className="mdi mdi-twitter-box"></span>
                      &nbsp; Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/codetraingh/?hl=en">
                      <span className="mdi mdi-instagram"></span>
                      &nbsp; Instagram
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={12}>
                <hr />
                <p className="text-center">
                  &copy; 2020 Codetrain - All Rights Reserved.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Footer;
