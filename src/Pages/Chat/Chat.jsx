import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [state, setstate] = useState(false);

  function click() {
    setstate(true);
  }

  return (
    <>
      {state ? (
        <div className="chatDiv">
          <button
            onClick={() => setstate(false)}
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
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
      ) : (
        <img
          onClick={click}
          className="chat"
          src="https://i.imgur.com/WgPUDNT.gif
            "
          alt=""
          width={"120px"}
        />
      )}
      {/* {state ? <h1>hello</h1> : "helllo mai"} */}
    </>
  );
}

export default Chat;
