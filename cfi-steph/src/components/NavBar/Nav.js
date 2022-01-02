import "./nav.css";
import React, { useState } from "react";
import Homepage from "../HomePage/Homepage";
import Contact from "../Contact/Contact"

function Nav() {
  const [isActive, setisActive] = React.useState(false);
  const [page, setPage] = useState("Landing");
  function setHome() {
    setPage("");
  }
  function setAbout() {
    setPage("about");
  }
  function setLanding() {
    setPage("Landing");
  }

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            {/* <img id="logo" src="./assets/images/CFI_Steph_logo.png" /> */}
          </a>

          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item" href="#homepage" onClick={Homepage}>
              Home
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Education</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Private Pilot Knowledge</a>
                <a className="navbar-item">Instrument Rating Knowledge</a>
                <a className="navbar-item">Commercial Pilot Knowledge</a>
                <a className="navbar-item">Multi-Engine Knowledge</a>
                <a className="navbar-item">Suggested Reading</a>
              </div>

              <a className="navbar-item" href="#about" onClick={setAbout}>
                About
              </a>
              <a
                className="navbar-item"
                href="#shop"
                onClick={() => {
                  setPage("shop");
                }}
              >
                Shop
              </a>
              <a
                href=""
                className="navbar-item"
                href="#contact"
                onClick={() => {
                  setPage("contact");
                }}
              >
                Contact
              </a>
              <a className="navbar-item" href="#blog"
                onClick={() => {
                  setPage("blog");
                }}>Blog</a>
            </div>
          </div>
        </div>
      </nav>


      <div className="sections">
        {page === "homepage" ? (
       <Homepage />
        ) : page === "contact" ? (
          <div>
          <Contact />
          </div>
        ) : page === "shop" ? (
          <div>
        
          </div>
        ) : (
          <div>
     
          </div>
        )}
  
      </div>
    </div>
  );
}

export default Nav;
