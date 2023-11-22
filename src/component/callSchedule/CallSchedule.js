import React from 'react';
import { Row, Col} from 'react-bootstrap';

export default function CallSchedule() {
  return (
    <Row className=" text-light py-5" style={{backgroundColor:"#4e88c6", height:"400px"}}>
      <Col md={2}></Col>
      <Col md={8} className="text-center d-flex justify-content-center align-items-center flex-column">
        <h2 className='text-white'>Take the first step to a new career.</h2>
        <h2 className='text-white'> Call  Admissions.</h2>
        {/* <a  className="btn-custom-primary-large" href='https://calendly.com/codetrainadmissions/book-a-call' > 
        
       Schedule A Call
      
        </a> */}
      <h3  className='text-white'>TALK TO US
+233 545 792 397</h3>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
}
