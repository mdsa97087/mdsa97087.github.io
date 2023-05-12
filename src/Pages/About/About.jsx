import React from "react";
import ResumeDownload from "../ResumeData/ResumeDownload";
import "./About.css";

function About() {
  return (
    <section id="about">
      <h2 className="aboutme">ABOUT ME</h2>
      <div className="bigdiv">
        <br />
        <div className="photodiv">
          <img
            className="samphoto"
            src="https://i.imgur.com/uK9Tb8D.jpg
          "
            alt=""
          />
        </div>
        <div className="detailsdiv">
          {/* <h1 className="big">About</h1> */}
          <p align="justify">
            Hi Everyone, My name is Md Shamshad Alam and I am from West
            Champaran, Bihar (India). I have Completed my graduation(B.tech) in
            Electrical Engineering from Rajasthan Technical University, Kota. I
            Joined full stack development course by Masai School a military type
            coding school.
          </p>
          <ul className="aboutul">
            <li className="dd-flex">
              <span>Name:</span> <span>Md Shamshad Alam</span>
            </li>
            <li className="dd-flex">
              <span>Date of birth:</span> <span>January 25, 2001</span>
            </li>
            <li className="dd-flex">
              <span>Address:</span> <span>Jaipur, Amer</span>
            </li>
            <li className="dd-flex">
              <span>Pin code:</span> <span>302028</span>
            </li>
            <li className="dd-flex">
              <span>Email:</span> <span>mdsa97087@gmail.com</span>
            </li>
            <li className="dd-flex">
              <span>Phone: </span> <span>+91 9708768232</span>
            </li>
          </ul>
          <ResumeDownload />
        </div>
      </div>
    </section>
  );
}

export default About;
