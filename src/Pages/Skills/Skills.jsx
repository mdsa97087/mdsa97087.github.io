import React from "react";
import "./Skills.css";
import GitHubCalendar from "react-github-calendar";

function Skills() {
  const skills = [
    {
      img: "https://i.imgur.com/3s5lgQM.png",
      h4: "HTML",
    },
    {
      img: "https://i.imgur.com/s7J8pBb.png",
      h4: "CSS",
    },
    {
      img: "https://cdn.iconscout.com/icon/free/png-128/javascript-2752148-2284965.png",
      h4: "JAVASCRIPT",
    },
    {
      img: "https://i.imgur.com/n3dTkZd.png",
      h4: "REACT",
    },
    {
      img: "https://i.imgur.com/zhYNMYG.png",
      h4: "REDUX",
    },
    {
      img: "https://i.imgur.com/7FupgDO.png",
      h4: "TYPESCRIPT",
    },
    {
      img: "https://i.imgur.com/D6pwAxh.png",
      h4: "NODE.JS",
    },
    {
      img: "https://i.imgur.com/jLYnvgz.png",
      h4: "GITHUB",
    },
    {
      img: "https://i.imgur.com/sDwP5Gz.png",
      h4: "VS CODE",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUoxJX3eWP5nBZk7f2C08Ap8Dk_rx1Fk1QuJPaZ7kEJHd4Udzc-arAGbb5sWRwh-PNx8&usqp=CAU",
      h4: "CHAKRA UI",
    },
    {
      img: "https://i.imgur.com/9GtcIYL.png",
      h4: "BOOTSTRAP",
    },
    {
      img: "https://cdn.iconscout.com/icon/free/png-128/netlify-3521601-2945045.png",
      h4: "NETLIFY",
    },
    {
      img: "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png",
      h4: "VERCEL",
    },
  ];

  return (
    <section id="skills">
      <div className="homediv">
        <h1 className="aboutme">SKILLS</h1>
        <h3>I have Learn so far.</h3>
        <div className="project2div">
          {skills.map(({ img, h4 }) => (
            <div className="skillImgDiv">
              <img src={img} alt="" width={"50px"} />
              <h6
                style={{
                  marginTop: "5px",
                }}
              >
                {h4}
              </h6>
            </div>
          ))}
        </div>
        <h1 className="aboutme">GITHUB STATS</h1>
        <div className="project2div">
          <p>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=mdsa97087&show_icons=true&locale=en&layout=compact&theme=dracula"
              alt="mdsa97087"
              width={"100%"}
            />
          </p>
          <p>
            <img
              src="https://github-readme-stats.vercel.app/api?username=mdsa97087&show_icons=true&locale=en&theme=dracula"
              alt="mdsa97087"
              width={"100%"}
            />
          </p>
          <p>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=mdsa97087&theme=dracula"
              alt="mdsa97087"
              width={"100%"}
            />
          </p>
          <p>
            <a href="https://github.com/mdsa97087">
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mdsa97087&theme=dracula"
                width={"100%"}
              />
            </a>
          </p>
          <p>
            <a href="https://github.com/mdsa97087">
              <img
                style={{
                  borderRadius: "8px",
                }}
                src="https://i.imgur.com/9Gv1SCA.png"
                width={"100%"}
                alt=""
              />
            </a>
          </p>
          {/* <GitHubCalendar color={"green"} username="mdsa97087" /> */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
