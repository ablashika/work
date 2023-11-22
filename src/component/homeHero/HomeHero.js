import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./homeHero.css"


import students from "../../assets/img/hero/graduants.jpg"

const content = {
  title: "Start your career in Software Engineering ",
  description:
    "Your future career starts here. Study online, with flexible payment options and the full support of industry pros and career mentors.",
  button: "Get Started",
  btnClass: "btn-custom-primary-large",
  url: "https://app.codetrain.africa/apply",
  image: students,
}

const HomeHero = () => {

  const scrollDown = () => {
    // Set the distance you want to scroll down
    const scrollDistance = 700; // Adjust this value as needed

    // Calculate the new scroll position
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const targetScroll = currentScroll + scrollDistance;

    // Scroll smoothly to the new position
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <Row className="home-hero-section">
      <div
        className="slider-wrapper"
        style={{
          background: `url('${content.image}') no-repeat center center`,
        }}
      >
        <div className="slider-content">
          <div className="inner">
            <h3>{content.title}</h3>
            {/* <h4 style={{color:"white"}}>or UX/UI Design</h4> */}
            <ul className="hero-list">
              <li>
             
                <p className="list-items">
                Your future career starts here.
                   </p>
              </li>
              <li>
                <p className="list-items">
                Study with flexible payment options and the full support of 
                industry pros and career mentors
                </p>
              </li>
              <li>
                <p className="list-items">
                  Get connected to jobs and start earning
                </p>
              </li>
            </ul>

            <br />
             <Link className="btn-custom-primary-large" onClick={scrollDown}>

             {content.button}
             </Link>
             
          
            <p className="hero-announcement">
              * Admission is in progress for the January class. Register Now!
            </p>
          </div>
        </div>
      </div>
 
    </Row>
  )
}

export default HomeHero
