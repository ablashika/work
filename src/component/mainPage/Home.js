import React from "react";

import NavBar from "../navbar/Navbar";
import HomeHero from "../homeHero/HomeHero";
import VideoTestimonial from "../videoTestimonial/VideoTestimonial";
import ProgramSummary from "../programSummary/ProgramSummary";
import ScheduleOptions from "../scheduleOptions/ScheduleOptions";
import CallSchedule from "../callSchedule/CallSchedule";
import Footer from "../footer/Footer";
import ProgramBenefit from "../programBenefit/programBenefit";
import Contact from "../contact/Contact";
import VideoCard from "../videoCard/VideoCard";


function Home() {
  return (
      <>
       <NavBar/>
        <ProgramSummary/>
        <VideoTestimonial/> 
        <ScheduleOptions/>
        <ProgramBenefit/>
        <CallSchedule/>
        <Contact/>
        <VideoCard/>
        <Footer/>
        
      </>
   

  );
}

export default Home;



















// <Row
// className="d-flex justify-content-center align-items-center"
// style={{ backgroundColor: "lavender" }}
// >
// <Col md="7">
//   <div>
//     <h1>
//       Start your career in <br></br> UX/UI Design
//     </h1>
//     <h4>
//       Your future career starts here. Study online, with flexible
//       payment options and the full support
//     </h4>

//     <h4 style={{ paddingTop: "40px" }}>
//       Learn in-demand tech skills that companies are hiring for
//     </h4>
//     <h4 style={{ paddingTop: "30px" }}>
//       Get practical experience by working on projects and building a
//       portfolio
//     </h4>
//   </div>
// </Col>
// <Col
//   md="5"
//   className="d-flex justify-content-center align-items-center"
// >
//   {/* Add class 'img-fluid' for responsive images */}
//   <img
//     src="https://images.ctfassets.net/344fh7n2hs9h/5aZQJFXlPk0Oiej4UmXFCT/e17e5bd229cfbdcd8b4d99442bc7ddd8/UXUI_curriculum_20210224_desktop.jpg?fm=webp&q=80"
//     className="img-fluid"
//     alt="UX/UI Design Bootcamp"
//   />
// </Col>
// </Row>
// <Row
// className="d-flex justify-content-center align-items-center"
// style={{ padding: "50px" }}
// >
// <Col md="5" className="text-center">
//   <h4 style={{ color: "pink" }}>Earn back your tuition</h4>
//   <p
//     style={{
//       fontSize: "17px",
//       lineHeight: "1.6",
//     }}
//   >
//     The high demand for professionals in technology makes it one of
//     the best-paying industries globally.<br></br>
//     After just 5 years as a fellow at codetrain, Awal, transitioned
//     into working remotely for a Canadian gaming company. Less than 1
//     year after he joined Big Viking games, Awal is now a senior
//     developer. He works right here from his home in Ghana or anywhere
//     else he finds himself.
//   </p>

//   <Button
//     variant="primary"
//     style={{ marginTop: "40px", marginBottom: "40px" }}
//   >
//     Enroll Now
//   </Button>
// </Col>
// <Col
//   md="7"
//   className="d-flex justify-content-center align-items-center"
// >
//   <iframe
//     width="560"
//     height="315"
//     src="https://www.youtube.com/embed/8ceNPJzXMok?si=WNyhpIxxRqluwRXt"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     allowfullscreen
//   ></iframe>
// </Col>
// </Row>