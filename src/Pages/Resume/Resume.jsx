import React from "react";
import ResumeDownload from "../ResumeData/ResumeDownload";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume">
      <div className="homediv">
        <h2 className="aboutme">RESUME</h2>
        <div className="resumeDiv">
          <div className="resume-wrap ftco-animate">
            <span className="date">2022</span>
            <h2>Web Developer</h2>
            <span className="position">Masai School</span>
          </div>
          <div className="resume-wrap ftco-animate">
            <span className="date">2017-2021</span>
            <h2>Bachelor's Degree</h2>
            <span className="position">
              Rajasthan Technical University, Kota
            </span>
            <p className="mt-4">80%</p>
            <p className="mt-4">First Division With Honours</p>
          </div>
          <div className="resume-wrap ftco-animate">
            <span className="date">2015-2017</span>
            <h2>Intermediate School</h2>
            <span className="position">Bihar School Examination Board</span>
            <p className="mt-4">64%</p>
          </div>

          <div className="resume-wrap ftco-animate">
            <span className="date">2014-2015</span>
            <h2>Secondary School</h2>
            <span className="position">Bihar School Examination Board</span>
            <p className="mt-4">75%</p>
          </div>
        </div>
      </div>
      <ResumeDownload />
    </section>
  );
}

export default Resume;
