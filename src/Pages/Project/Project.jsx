import React from "react";
import "./Project.css";

function Project() {
  const ProjectList = [
    {
      id: 1,
      src1: "https://i.imgur.com/jMRaMUB.png",
      src2: "https://i.imgur.com/7VNGsib.png",
      src3: "https://i.imgur.com/evRFzvM.png",
      h1: "Movie",
      details:
        "A Fully Responsive Movie Booking website and Work All Pages like Movie Booking website,built with HTML, CSS, JavaScript, OmdbApi,Bootstrap.",
      a1: "https://github.com/mdsa97087/Movie-Booking-Website/tree/main/BootStarpproject",
      a2: "https://movie-website-clone97.netlify.app/index.html",
      p1: "HTML",
      p2: "CSS",
      p3: "JavaScript",
      p4: "Bootstrap",
      p5:'Netlify'
    },
    {
      id: 2,
      src1: "https://i.imgur.com/QUbex1H.png",
      src2: "https://i.imgur.com/TBfKxkB.png",
      src3: "https://i.imgur.com/ZRW0kFW.png",
      h1: "Mantra",
      details:
        "This is Clone of Mantra.com and Build By React, Chakra UI, React-router-dom, Axios and Api.",
      a1: "https://github.com/mdsa97087/mantra-clone/tree/main/mantraCloneProject",
      a2: "https://mantra-clone-project-mdsa97087.vercel.app/",
      p1: "HTML",
      p2: "CSS",
      p3: "React",
      p4: "Chakra UI",
      p5:'Vercel'

    },
    {
      id: 3,
      src1: "https://i.imgur.com/e7Xf9iq.png",
      src2: "https://i.imgur.com/r1R2YjA.png",
      src3: "https://i.imgur.com/s6nuqKn.png",
      h1: "Calendly",
      details:
        "This Project is build By Group and in this Project I work on Navbar and index Page.",
      a1: "https://github.com/mdsa97087/UNIT-03-PROJECT-JS201",
      a2: "https://calenly-com.netlify.app/index.html",
      p1: "HTML",
      p2: "CSS",
      p3: "JavaScript",
      p4: "Bootstrap",
      p5:'Netlify'

    },
    {
      id: 4,
      src1: "https://i.imgur.com/Wi2b3Ow.png",
      src2: "https://i.imgur.com/ao6oyDs.png",
      src3: "https://i.imgur.com/XrKYY32.png",
      h1: "Indeed",
      details:
        "This website is Clone of Indeed.com made by Html, CSS, JavaScript.",
      a1: "https://github.com/mdsa97087/All-Project/tree/main/UNIT-02-PROJECT-INDEED",
      a2: "https://sparkling-dasik-b984bf.netlify.app/index.html",
      p1: "HTML",
      p2: "CSS",
      p3: "JavaScript",
      p4: "Bootstrap",
      p5:'Netlify'

    },
    {
      id: 5,
      src1: "https://i.imgur.com/zwW0qRC.png",
      src2: "https://i.imgur.com/hTQvtqV.png",
      src3: "https://i.imgur.com/yo22Kog.png",
      h1: "Weather App",
      details:
        "A web Application for getting weather information based on location.",
      a1: "https://github.com/mdsa97087/Weather-App-react/tree/main/weather",
      a2: "https://weather-1po0il7xl-mdsa97087.vercel.app/",
      p1: "HTML",
      p2: "CSS",
      p3: "React",
      p4: "Weather API",
      p5:'Vercel'

    },
  ];

  return (
    <section id="project">
      <div className="homediv">
        <h1 className="aboutme">PROJECT</h1>
        <h3>Let's take a look at what I've built so far.</h3>
        <div className="project2div">
          {/*           ----------------MAP                  */}
          {ProjectList.map(
            ({ id, src1, src2, src3, h1, details, a1, a2, p1, p2, p3, p4,p5 }) => (
              <div className="projectdivMiddle">
                <div className="project-imgDiv">
                  <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={src1} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={src2} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={src3} className="d-block w-100" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="h3p">{h1}</h3>
                <p
                  style={{
                    // border:'1px solid ',
                    height: "70px",
                  }}
                  className="h3p"
                >
                  {details}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px",
                  }}
                >
                  <a className="a1" href={a1}>
                    SOURCE CODE
                  </a>
                  <a className="a1" href={a2}>
                    DEMO
                  </a>
                </div>
                <div className="spanDiv">
                  <span className="span">{p1}</span>
                  <span className="span">{p2}</span>
                  <span className="span">{p3}</span>
                  <span className="span">{p4}</span>
                  <span className="span">{p5}</span>

                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Project;
