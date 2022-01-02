import React from "react";

function Nav() {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img id="logo" src="./assets/images/CFI_Steph_logo.png" />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a href="./education.html" class="navbar-link">
                Education
              </a>

              <a class="navbar-item">About</a>
              <a class="navbar-item">Shop</a>
              <a href="./contact.html" class="navbar-item">
                Contact
              </a>
              <a class="navbar-item">Blog</a>
              <div class="navbar-dropdown">
                <a class="navbar-item">Private Pilot Knowledge</a>
                <a class="navbar-item">Instrument Rating Knowledge</a>
                <a class="navbar-item">Commercial Pilot Knowledge</a>
                <a class="navbar-item">Multi-Engine Knowledge</a>
                <a class="navbar-item">Suggested Reading</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
