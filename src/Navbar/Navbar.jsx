import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import ReaNavbar from "./ReaNavbar";

function Navbar() {
  return (
    <div className="allnavbar">
      <div className="nav202">
        <div className="shamshad">
          <Link className="Link2" to="#homesection" smooth>
            SHAMSHAD
          </Link>
        </div>
        <div className="nav2">
          <Link id="home" className="Link2" to="#homesection" smooth>
            HOME
          </Link>
          <Link className="Link2" to="#about" smooth>
            ABOUT
          </Link>
          <Link className="Link2" to="#project" smooth>
            PROJECT
          </Link>
          <Link className="Link2" to="#resume" smooth>
            RESUME
          </Link>
          <Link className="Link2" to="#skills" smooth>
            SKILLS
          </Link>
          <Link className="Link2" to="#contact" smooth>
            CONTACT
          </Link>
        </div>
        <i
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          id="fa1"
          className="fa fa-bars fa-2x"
          aria-controls="offcanvasExample"
        ></i>
      </div>
      {/* ```````````     RESPONSIVE NAVBAR     ---------- */}
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            SHAMSHAD
          </h5>
          {/* <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> */}
        </div>
        {/* <div className="offcanvas-body"> */}
        <ReaNavbar />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Navbar;
