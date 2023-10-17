import React, { useEffect } from "react";
import "./About.css";
import logo from "./first look logo.png";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div className="about" id="about" data-aos='zoom-out'>
      <center>
        <br />
        <div className="d-sm-flex align-items-center justify-content-between"  >
          <img src={logo} className="image-fluid w-50" data-aos='zoom-in' data-aos-delay='1000' data-aos-duration='1500' alt="" />
          <p data-aos='fade-left' data-aos-duration='2000'>
            <h2 className="text-light about_head h2">
              About <span className="text-warning m-2">Us</span>
            </h2>
            <br />
            SAINTGITS College of Engineering organizes ‘Samyuktha .0’, a
            national level techno cultural fest, on March 24th. ‘Samyuktha’ has
            been successfully organized for the past five years and serves as an
            ideal platform for talented undergraduate and postgraduate computer
            application students to showcase their technical and artistic
            skills. In this fest, students will compete for more than 10 events
            like Best Singer, Spot Photography, Coding, Web Designing, Treasure
            Hunt, Spot Dance. A total prize money of Rs.70000 awaits the
            contestants. Saintgits College of Engineering launched ‘Samyuktha’
            in the year 2016 with the aim of bringing to the forefront the
            artistic, cultural and technical skills of students amidst their
            busy academic schedule. ‘Samyuktha’ is jointly organized by a team
            of dedicated staff members and students who are leaving no stone
            unturned to ensure that this year’s ‘Samyuktha’ is bigger and better
            than the previous year.
          </p>{" "}
          <br />
        </div>
      </center>
    </div>
  );
}
