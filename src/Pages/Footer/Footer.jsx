import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./Footer.css";

function Footer() {
  return (
    <section
      style={{
        marginTop: "70px",
      }}
    >
      <div className="project2div">
        <div className="footer2div">
          <h3 className="h5">ABOUT</h3>
          <p align="justify">
            Hi Everyone, My name is Md Shamshad Alam and I am from West
            Champaran, Bihar (India). I have Completed my graduation(B.tech) in
            Electrical Engineering from Rajasthan Technical University, Kota. I
            Joined full stack development course by Masai School a military type
            coding school.
          </p>
        </div>
        <div
          className="footer2div"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
          }}
        >
          <h3 className="h5">LINKS</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
          >
            <Link className="FooterLink" to="#homesection" smooth>
              <img
                src="https://i.imgur.com/HwQxkkD.png
             "
                alt=""
                width={"25px"}
              />
              Home
            </Link>
            <Link className="FooterLink" to="#about" smooth>
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/about-help-info-information-details-ask-6003.png
                "
                alt=""
                width={"25px"}
              />
              About
            </Link>
            <Link className="FooterLink" to="#project" smooth>
              <img
                src="https://i.imgur.com/BUhPKq4.png
            "
                alt=""
                width={"25px"}
              />
              Project
            </Link>
            <Link className="FooterLink" to="#resume" smooth>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-128-thumb/resume-1502772-1272982.png
            "
                alt=""
                width={"25px"}
              />
              Resume
            </Link>
            <Link className="FooterLink" to="#skills" smooth>
              <img
                src="https://i.imgur.com/LbQW70E.png
            "
                alt=""
                width={"25px"}
              />
              Skills
            </Link>
            <Link className="FooterLink" to="#contact" smooth>
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/contact-1817237-1538106.png
            "
                alt=""
                width={"25px"}
              />
              Contact
            </Link>
          </div>
        </div>
        <div className="footer2div">
          <h3 className="h5">HAVE A QUESTIONS ? </h3>
          <div>
            <div className="footercontact3">
              <img
                src="https://i.imgur.com/IfgBhUu.png
                  "
                alt=""
                width={"25px"}
                height="25px"
              />
              <h6>Gurugram Sector-37 , 122004</h6>
            </div>
            <div className="footercontact3">
              <a className="footercontact3" href="mailto:mdsa97087@gmail.com">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-128/gmail-2981844-2476484.png
                  "
                  alt=""
                  width={"25px"}
                  height="25px"
                />
                <h6>mdsa97087@gmail.com</h6>
              </a>
            </div>
            <div className="footercontact3">
              <a className="footercontact3" href="tel:+919708768232">
                <img
                  src="https://i.imgur.com/ti7H0Bd.png
          "
                  alt=""
                  width={"30px"}
                  height="30px"
                />
                <h6>+91 9708768232</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerSocialMedia">
        <div className="aDivFooter">
          <a href="">
            <img
              src="https://i.imgur.com/eYB5PbT.png
                  "
              alt=""
              width={"32px"}
            />
          </a>
          <a href="https://www.facebook.com/mdshamshad.alam.31149/">
            <img
              src="https://i.imgur.com/Vbd2Mz5.png
                  "
              alt=""
              width={"32px"}
            />
          </a>
          <a href="">
            <img
              src="https://i.imgur.com/85RbKaN.png
                  "
              alt=""
              width={"32px"}
            />
          </a>
        </div>
        <div className="aDivFooter">
          <a href="https://www.linkedin.com/in/md-68379a254/">
            <img
              src="https://i.imgur.com/slqNuYc.png
                  "
              alt=""
              width={"30px"}
            />
          </a>
          <a href="https://github.com/mdsa97087">
            <img
              src="https://i.imgur.com/VMpwfMl.png
                  "
              alt=""
              width={"30px"}
            />
          </a>
          <a href="https://wa.me/+919708768232">
            <img
              src="https://i.imgur.com/C8MvhvI.png
                  "
              alt=""
              width={"35px"}
            />
          </a>
        </div>
      </div>
      <section>
        <h5
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Created By Md Shamshad Alam
          <span>
            <img
              style={{
                marginLeft: "10px",
                // background:'red',
                // borderRadius:'50%'
              }}
              src="https://i.imgur.com/T6ImRC4.gif
            "
              alt=""
              width={30}
            />
          </span>
        </h5>
      </section>
    </section>
  );
}

export default Footer;
