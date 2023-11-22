import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../App.css"
import "./navbar.css"
export default function NavBar() {
  return (

      <Row >  
             <Navbar className="navbar navbar-expand-lg navbar-light sticky-top main-navbar" >
             <Navbar.Brand href="#home" navbar-brand>
             <a className="navbar-brand" to="/" > 
                <img src="https://codetrainafrica.com/static/logo-d94ce7c1319195cf5c26fcf85e2fc4da.png" alt="Codetrain" className="logo-img "  style={{marginLeft:"10px", padding:"0px"}} />
              </a>
             </Navbar.Brand>
             
              
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
             
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      to="/success_stories/"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Success stories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      to="/courses/"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Our course
                    </a>
                  </li>
                </ul>
              </div>
             </Navbar>
                       
        </Row>

        
  )
}



          {/* <Navbar collapseOnSelect expand="lg" main-navbar>
            <Navbar.Brand href="#home" navbar-brand>
              <img
                src="https://codetrainafrica.com/static/logo-d94ce7c1319195cf5c26fcf85e2fc4da.png"
                style={{ height: "30px", paddingLeft: "10px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Success stories</Nav.Link>
                <Nav.Link href="#pricing">Our course</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}