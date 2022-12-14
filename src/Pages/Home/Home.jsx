import React from "react";
import Navbar from "../../Navbar/Navbar";
import Chat from "../Chat/Chat";
import ResumeDownload from "../ResumeData/ResumeDownload";
import "./Home.css";
import { homeCall } from "./HomeCall";

function Home() {
  return (
    <section id="homesection">
      <div className="homediv">
        <img
          className="homophoto"
          src="https://i.imgur.com/7FDvjDG.png
            "
          alt=""
        />

        <div className="homedetail">
          <h2
            style={{
              margin: "10px",
              fontSize: "1.5rem",
            }}
          >
            Hello, I am Md Shamshad Alam
          </h2>
          {/* <h1
            style={{
              margin: "10px",
              fontSize: "1.8rem",
            }}
          >
            Full Stack Web Developer
          </h1> */}
          <img
            style={{
              // border: "1px solid",
              margin: "auto",
            }}
            src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=20&duration=4000&pause=1000&color=red&background=yellow&width=310&height=45&lines=Full+Stack+Web+Developer;Rising+Mern+Developer;Always+Learning+New+Things"
            alt="Typing SVG"
          />
          <h5
            style={{
              fontSize: "1.1rem",
            }}
          >
            Inspiring full stack web developer, having problem-solving ability
            and proficiency in MERN Stack. A quick learner and always curious to
            learn new things in terms of technology. Worked on two group
            projects and 15+ solo projects.
          </h5>
        </div>
        <h1
          style={{
            fontSize: "3rem",
            margin: "10px",
          }}
        >
          I Enjoy Building and Designing for the Web.
        </h1>
        <div className="contact">
          {homeCall.map(({ src, a }) => (
            <a className="contacta" href={a}>
              <img
                style={{
                  borderRadius: "50%",
                }}
                src={src}
                alt=""
                width="55px"
              />
            </a>
          ))}
        </div>
        <ResumeDownload />
      </div>
        <Chat />
    </section>
  );
}

export default Home;
