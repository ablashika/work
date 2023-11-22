
// import React from 'react';
// import { Container, Row, Col, Table } from "react-bootstrap";
// import "./scheduleoptions.css"

// export default function ScheduleOptions() {
//   return (
//     <Row className='border-top'>
//       <Col md={2}></Col>
//       <Col md={8} className='section-container course-and-careers-section'>
          
//             <Row style={{}}>
//               <Col lg={12}>
//                 <div className="main-section-heading">
//                   <h3 className="program-summary-title text-center">
//                   Schedule Options
//                   </h3>
//                 </div>
//               </Col>
//             </Row>
//             <Row  className="text-center d-flex justify-content-center align-items-center flex-column">
//               <div style={{ width:"900px", backgroundColor:"#f9f7fb"}} className="text-center d-flex justify-content-center align-items-center flex-column">
//                 <div>
//               <Table  striped borderless>
//                   <tbody style={{}}>

//                     <tr>
//                       <th className='h5'>Study Mode</th>
//                       <td>Study with a cohort, in person/virtual.</td>
                      
//                     </tr>

//                     <tr>
//                       <th className='h5'>Duration</th>
//                       <td>24 months</td>
//                     </tr>

//                     <tr>
//                       <th className='h5'>Time commitment</th>
//                       <td>20-25 hours a week</td>
//                     </tr>

//                     <tr>
//                       <th className='h5'> Mentor Sessions</th>
//                       <td>in-person/virtual weekly lectures and workshops</td>
//                       </tr>


//                     <tr>
//                       <th className='h5'>Requirements</th>
//                       <td> Pass aptitude test</td>
//                     </tr>

//                     <tr>
//                       <th className='h5'>Upfront Tuition</th>
//                       <td>Pay GHS3000 upfront</td>
//                     </tr>
//                   </tbody>
                  
//                 </Table>
//                 </div>
//                 </div>
//               {/* </Col> */}
//               {/* <Col Col={1}></Col> */}
//             </Row>
            
    
//       </Col>
//       <Col md={2}></Col>
//     </Row>
//   )
// }



// ScheduleOptions.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './scheduleoptions.css';

export default function ScheduleOptions() {
  return (
    <Row className='border-top'>
      <Col md={2}></Col>
      <Col md={8} className='section-container course-and-careers-section'>
        <Row>
          <Col lg={12}>
            <div className='main-section-heading'>
              <h3 className='program-summary-title text-center'>Schedule Options</h3>
            </div>
          </Col>
        </Row>
        <Row className='text-center d-flex justify-content-center align-items-center flex-column'>
          <div style={{  }} className='text-center d-flex justify-content-center align-items-center flex-column'>
            
            <Row>
              <Col md={6}>
                <Card className='cards'>
                  <Card.Body>
                    <Card.Title className='h5' >Study Mode</Card.Title>
                    <Card.Text style={{ color:"white",}}>Study with a cohort, in person saturday class/virtual.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} style={{margin:"0px"}}>
                <Card  className='cards'>
                  <Card.Body>
                    <Card.Title className='h5'>Duration</Card.Title>
                    <Card.Text style={{ color:"white",}}>12 months</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card  className='cards'>
                  <Card.Body>
                    <Card.Title className='h5'>Saturday Live Class </Card.Title>
                    <Card.Text style={{ color:"white",}}>in-person live class on saturday at codetrain campus</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card  className='cards'>
                  <Card.Body>
                    <Card.Title className='h5'>Virtual Live Class</Card.Title>
                    <Card.Text style={{ color:"white",}}> Virtual live class accessible too anyone</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card  className='cards'>
                  <Card.Body>
                    <Card.Title className='h5'>Time commitment</Card.Title>
                    <Card.Text style={{ color:"white",}}>10-20 hours a week</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card  className='cards'>
                  <Card.Body>
                    <Card.Title className='h5'>Mentor Sessions</Card.Title>
                    <Card.Text style={{ color:"white",}}>in-person /virtual training and workshops</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card  className='cards'>
                  <Card.Body>
                    <Card.Title className='h5'>Requirements</Card.Title>
                    <Card.Text style={{ color:"white",}}>Complete the entire application process</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card  className='cards'>
                  <Card.Body>
                    <Card.Title className='h5'>Payment Plan</Card.Title>
                    <Card.Text style={{ color:"white",}}> montly/Quarterly Payment</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Row>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
}


