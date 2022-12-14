import React from "react";
import "./Contact.css";
import { homeCall } from "../Home/HomeCall";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="homediv">
          <h2 className="aboutme">CONTACT ME</h2>
          <div className="project2div">
            <div
              className="contact"
              style={{
                width: "700px",
                gap: "40px",
              }}
            >
              {homeCall.map(({ src, a }) => (
                <a className="contacta" href={a}>
                  <img
                    style={{
                      borderRadius: "50%",
                    }}
                    src={src}
                    alt=""
                    width="90px"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="addressgamil">
            <a className="acontact" href="tel:+919708768232">
              <img
                src="https://i.imgur.com/ti7H0Bd.png
          "
                alt=""
                width={"60px"}
              />
              <h5>+91 9708768232</h5>
            </a>
            <a className="acontact" href="mailto:mdsa97087@gmail.com">
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/gmail-2981844-2476484.png
          "
                alt=""
                width={"60px"}
              />
              <h5>mdsa97087@gmail.com</h5>
            </a>
            <a className="acontact" href="">
              <img
                src="https://i.imgur.com/IfgBhUu.png
                  "
                alt=""
                width={"60px"}
              />
              <h6>Gurugram Sector-37 , 122004</h6>
            </a>
          </div>
        </div>
      </section>
      <hr
        style={{
          background: "yellow",
          height: "5px",
          border: "none",
        }}
      />
      <section>
        <div className="sendsms">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.imgur.com/7FDvjDG.png
              "
              alt=""
              height={"300px"}
            />
          </div>
          <div
            style={{
              width: "500px",
            }}
          >
            <form
              className="sendtext"
              action="https://getform.io/f/0f604800-34ab-4d25-b278-56f5b4399c53"
              method="POST"
            >
              <input
                className="contactinput"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="contactinput"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                style={{
                  border: "2px solid",
                  borderRadius: "8px",
                  padding: "15px",
                  fontSize: "1.2rem",
                }}
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                style={{
                  border: "2px solid",
                  height: "50px",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  borderRadius: "10px",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <div
      className="row no-gutters block-9"
      >
        <div
        className="col-md-6 order-md-last d-flex"
        >
          <form
            action="https://getform.io/f/0f604800-34ab-4d25-b278-56f5b4399c53"
            method="POST"
            className="bg-light p-4 p-md-5 contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control"
            />
            <input type="text" name="message" /> 
            <div
              name=""
              id=""
              cols="30"
              rows="7"
              className="form-control"
              placeholder="Message"
            ></div>

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="col-md-6 d-flex">
          <div
            className="img"
            style="background-image: url(images/about.jpg)"
          ></div>
        </div>
      </div> */}
    </>
  );
}

export default Contact;
