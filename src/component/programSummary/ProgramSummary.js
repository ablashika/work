// import React from 'react';
// 
// import CardGroup from 'react-bootstrap/CardGroup';
// import "./programSummary.css"

// export default function ProgramSummary() {
//   return (
//     <>
//       <Row
//         style={{ paddingBottom: "80px", paddingTop: "80px", }}
//         className='d-flex justify-content-center align-items-center flex-column  border-top'>

//         <Col md={2}></Col>
//         <Col md={8}>
//           <div style={{ marginBottom: "40px", height: "200px" }} className='d-flex justify-content-center align-items-center flex-column  '>

//             <h1 className='h1' style={{ backgroundColor: "white", color: "#4E88C6", }} >Build a career in an exciting,</h1>
//             <h1 className='h1' style={{ backgroundColor: "white", color: "#4E88C6", }} > in-demand profession.</h1>

//           </div>
//           <CardGroup>
//             <Card style={{ backgroundColor: "white", color: "#d25aa2", border: "1px solid #d25aa2" }} className='program-card'>
//               <Card.Body>
//                 <Card.Title> Learn job-ready skills in</Card.Title>
//                 <Card.Title><h1 className='display-4'>
//                   12 months
//                     </h1></Card.Title>
//                 <Card.Text style={{ backgroundColor: "white", color: "#d25aa2", }} >
//                   UX / UI designers are the creative minds behind user-friendly experiences. They design, build, and maintain websites and apps.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//             <Card className='program-card'>
//               <Card.Body>
//                 <Card.Title style={{ color: "#d25aa2", }}>UX topic: Common Job Titles</Card.Title>
//                 <Card.Text style={{ color: "#d25aa2", }}>UX / UI Designer</Card.Text>
//                 <Card.Text style={{ color: "#d25aa2", }}>Product Designer</Card.Text>
//                 <Card.Text style={{ color: "#d25aa2", }}>Web Designer</Card.Text>
//                 <Card.Text style={{ color: "#d25aa2", }}>Certificate of Completion</Card.Text>
//                 <Card.Text style={{ color: "#d25aa2", }}>10 hours a week</Card.Text>
//               </Card.Body>
//             </Card>
//             <Card className='program-card'>
//               <Card.Body>
//                 <Card.Title style={{ backgroundColor: "white", color: "#d25aa2", }}>Job Skills</Card.Title>
//                 <Card.Text style={{ color: "#d25aa2", }}>Wireframe Prototyping</Card.Text>
//                 <Card.Text style={{ color: "#d25aa2", }}>User Research</Card.Text>
//                 <Card.Text style={{ color: "#d25aa2", }}>Information Architecture</Card.Text>
//                 <Card.Text style={{ color: "#d25aa2", }}>User Empathy</Card.Text>
//                 <Card.Text style={{ color: "#d25aa2", }}>Interactive Design</Card.Text>
//               </Card.Body>

//             </Card>
//           </CardGroup>
//         </Col>
//         <Col md={2}></Col>
//       </Row>
//     </>
//   );
// }


import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import './programSummary.css';

export default function ProgramSummary() {
  return (
    <>
      <Row
        style={{ paddingBottom: '80px', paddingTop: '80px' }}
        className='d-flex justify-content-center align-items-center flex-column  border-top'
      >
        <Col md={2}></Col>
        <Col md={8}>
          <div style={{ marginBottom: '40px', height: '200px' }} className='d-flex justify-content-center align-items-center flex-column'>
            <h1 className='h1' style={{ backgroundColor: 'white', color: '#d25aa2' }}>
              Build a career in an exciting,
            </h1>
            <h1 className='h1' style={{ backgroundColor: 'white', color: '#d25aa2' }}>
              in-demand profession.
            </h1>
          </div>
          <CardGroup>
            <Card className='program-cards' style={{backgroundColor:"#4E88C6"}}>
              <Card.Body>
                <Card.Title> Learn job-ready skills in</Card.Title>
                <Card.Title>
                  <h1 className='display-4'>12 months</h1>
                </Card.Title>
                <Card.Text >
                UX/UI designers are the imaginative brains responsible for crafting user-friendly experiences
             websites and apps, overseeing design to ensure seamless and enjoyable interactions. 
               </Card.Text>
              </Card.Body>
            </Card>
            <Card className='program-cards' >
              <Card.Body>
                <Card.Title > Typical Job Titles</Card.Title>
                <Card.Text >Web Designer</Card.Text>
                <Card.Text >UX / UI Designer</Card.Text>
                <Card.Text>Product Designer</Card.Text>
                {/* <Card.Text >P</Card.Text>
                <Card.Text >10-15 hours a week</Card.Text> */}
              </Card.Body>
            </Card>
            <Card className='program-cards'  style={{backgroundColor:"#4E88C6"}}>
              <Card.Body>
               
                <Card.Title >What you'll learn</Card.Title>
                <Card.Text >User Research</Card.Text>
                <Card.Text >Wireframe Prototyping</Card.Text>
                <Card.Text >Figma or Adobe XD</Card.Text>
                <Card.Text>User Empathy</Card.Text>
                <Card.Text>Interactive Design</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
}





{/* <div className="section-container course-and-careers-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="main-section-heading">
              <h3 className="program-summary-title text-center">
                Program summary
              </h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Table borderless striped>
              <tbody>
                <tr>
                  <th>Duration</th>
                  <td>2 years</td>
                </tr>

                <tr>
                  <th>Hours of commitment per week</th>
                  <td>25</td>
                </tr>

                <tr>
                  <th>GH₵</th>
                  <td>29,000</td>
                </tr>

                <tr>
                  <th>GH₵</th>
                  <td>29,000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="text-center">
            <p>Additional content for the third row if needed</p>
          </Col>
        </Row>
      </Container>
    </div> */}
    {/* <div className="section-container course-and-careers-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="main-section-heading">
              <h3 className="program-summary-title text-center">
                Program summary
              </h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Table striped bordered>
              <tbody>
                <tr>
                  <th>Duration</th>
                  <td>2 years</td>
                </tr>

                <tr>
                  <th>Hours of commitment per week</th>
                  <td>25</td>
                </tr>

                <tr>
                  <th>GH₵</th>
                  <td>29,000</td>
                </tr>

                <tr>
                  <th>Medium</th>
                  <td>In-person or virtual</td>
                </tr>

                <tr>
                  <th>Start dates</th>
                  <td>February, May, October</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div> */}