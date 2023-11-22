import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './videocard.css';

export default function VideoCard() {
  return (
    <Row className='video-card '>
      <Col md={2}></Col>
      <Col md={8}>
        <Row>
          <h3 className='text-center mt-4'> Dive into our Latest Video Adventures! </h3>
        </Row>
        <Row>
          <Col md={6} className='d-flex justify-content-center flex-direction-column mt-4'>
            <Row className='flex-direct'>
              <Row className=''>
                <p>Embark on a thrilling journey with our summary video from the latest Demo Day event. Witness the excitement and innovation that unfolded!</p>
              </Row>
              <Row>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/uqozP61jgKQ?si=rMOBcKv26IZGimnx"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Row>
            </Row>
          </Col>
          <Col md={6} className='d-flex justify-content-center mt-4'>
            <Row className='flex-direct'>
              <Row className=''>
                <p>Here was an exciting Codetrain day out at Peduase!Codetrain Experience beyond coding — filled with fun, learning, and unforgettable moments.</p>
              </Row>
              <Row>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/uqozP61jgKQ?si=rMOBcKv26IZGimnx"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Row>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
}
