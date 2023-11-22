import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import campusInside from "../../assets/img/full-photos/campus-inside.jpg";
import campusOutside from "../../assets/img/full-photos/campus-outside.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
        <Row className="contact-section" id="contact">
          <Col lg={6} md={12} className="d-flex flex-column justify-content-center contact-info">
            <div className="contact-info__text">
              <h4 className="text-white">
                <span className="mdi mdi-phone"></span>
                &nbsp; TALK TO US
              </h4>
              <p>+233 545 792 397</p>
            </div>
            <div className="contact-info__text">
              <h4 className="text-white">
                <span className="mdi mdi-email"></span>
                &nbsp; EMAIL US
              </h4>
              <p style={{ fontSize: "1.5rem" }}>admissions@codetraingh.com</p>
            </div>
          </Col>
          <Col lg={6} className="">
            <h5 className="text-center contact-heading custom-blue-text">
              We offer in-person training at our East Legon campus and also
              provide options for virtual training to students wherever they
              are.
            </h5>
            <Row className="" style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <Col md={8} offset-md={2} className="contact-location">
                <div className="embed-responsive embed-responsive-16by9 contact-location__map"  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.010896899352!2d-0.22465684974796668!3d5.565401095945105!2m3!1f0!2f0!3f0!3m2!
                      1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b269a8fbdd1%3A0x1bb79c84b5c0e1f2!2sCodetrain+Hub!5e0!3m2!1sen!2sgh!4v1542025479541"
                    className="embed-responsive-item"
                    title="Accra Hub"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="contact-location__text text-center">
                  <h5 className="text-center">East Legon 16a Parsnip street</h5>
                  Near the A&C Mall
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="flex-column campus-image">
            <img
              src={campusOutside}
              alt="Codetrain hosts The AHK Innovation Challenge"
              className="img-fluid"
            />
          </Col>
          <Col lg={6} md={12} className="flex-column campus-image">
            <img
              src={campusInside}
              alt="Codetrain hosts The AHK Innovation Challenge"
              className="img-fluid"
            />
          </Col>
        </Row>
    
    </div>
  );
};

export default Contact;
