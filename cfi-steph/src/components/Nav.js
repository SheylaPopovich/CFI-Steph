import React from "react";
import "./nav.css";

function Nav() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
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
            <a className="navbar-item">Home</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Education</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Private Pilot Knowledge</a>
                <a className="navbar-item">Instrument Rating Knowledge</a>
                <a className="navbar-item">Commercial Pilot Knowledge</a>
                <a className="navbar-item">Multi-Engine Knowledge</a>
                <a className="navbar-item">Suggested Reading</a>
              </div>

              <a className="navbar-item">About</a>
              <a className="navbar-item">Shop</a>
              <a href="" className="navbar-item">
                Contact
              </a>
              <a className="navbar-item">Blog</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
