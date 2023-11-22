import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./videoTestimonial.css";

const VideoTestimonial = () => {
  return (
    <Row className="section-container demo-day-section " >
        <Col  md={2} ></Col>
        <Col md={3}className="d-flex  align-items-center flex-column video-text "
        >     
        <Row className="">
          <Col lg={12}>
            <h3 className="main-section-heading text-center">
              Earn back your tuition
            </h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12} >
            <p >
            Meet Lovelace, who, during the Codetrain program, made a successful transition into UX/UI design,
            </p>
            <p>
             She excelled as a thriving UX/UI designer, showcasing her skills and expertise gained through Codetrain's comprehensive curriculum 
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="text-center"  >
            <a 
              href="https://app.codetrain.africa/apply"  // Replace with your actual href value
              className="btn-custom-primary-large enroll-section mx-auto enrol"
            >
              Enroll now
            </a>
          </Col>
        </Row>
    </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
            style={{ padding:0 }}
          >
        <div className="embed-responsive embed-responsive-16by9" style={{ height:"100%", width:"100%"}}>
          {/* <iframe 
          height="100%"
           width="100%"
            
           src="https://www.youtube.com/embed/8ceNPJzXMok?si=WNyhpIxxRqluwRXt"
         
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe> */}
          <iframe width="100%" height="100%"
          className="embed-responsive-item"
     
           src="https://www.youtube.com/embed/AnthuAW3w9g?si=sOXjvqbqpxu-wJTm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </Col>
    <Col  md={2} ></Col>
    </Row>
  );
};

export default VideoTestimonial;
