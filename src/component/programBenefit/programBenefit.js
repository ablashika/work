import React from 'react';
import { Row, Col, Card , Container} from "react-bootstrap";
import './program.css'



export default function ProgramBenefit() {
  return (
   
    <div className="section-container features-intro">
    <Container>
      <div className="main-section-heading">
        <h3 className="text-center">The Codetrain Experience</h3>
        {/*
        
        
        
        <h6 className="text-center" style={{    color: "#4e88c6"}} >How is it Like to study at codetrain?</h6>  */}
     <p className="text-center" style={{color:'black'}}> How is it like to study at codetain? Our comprehensive curriculum equips you  with <br/> skills that go beyond borders, offering unlimited opportunities worldwide. <br/>Whether in Africa or across the globe,we're here to help you succeed <br/> in the competitive job market</p>
        
      </div>

      <Row>
      <Col md={2}></Col>
        <Col md={4} xs={12}>
          <ul>
            <BenefitItem
              title="Practical and friendly teachers"
              description="Young, industry-experienced teachers provide hands-on and friendly guidance."
            />
            <BenefitItem
              title="Project-based learning"
              description="Engage in learning through real-world projects, fostering practical skills."
            />
            <BenefitItem
              title="Job-ready skills"
              description="This program prepares you to be the perfect candidate for the industry. Acquire skills that make you a standout candidate in the tech industry."
            />
            <BenefitItem
            title="Interview Prep"
             description="Gain expert guidance in CV preparation and job interview skills, ensuring you shine as the perfect candidate in the tech industry."
           />
          </ul>
        </Col>

        <Col md={4} xs={12}>
          <ul>
            <BenefitItem
              title="Mentoring with industry experience"
              description="Receive mentorship from experienced professionals in the field."
            />
            <BenefitItem
              title="Collaboration with software developers"
              description="Collaborate with seasoned software developers, enhancing teamwork skills."
            />
            <BenefitItem
              title="Participation in innovation challenges (Demo Day)"
              description="Showcase your skills in exciting innovation challenges on Demo Day."
            />
            <BenefitItem
              title="Career services"
              description="Access dedicated career services to guide you on your professional journey."
            />
          </ul>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  </div>
);
};

const BenefitItem = ({ title, description }) => (
<li>
  <h6 style={{    color: "#4e88c6"}}> {title}</h6>
  <p>{description}</p>
</li>
);
