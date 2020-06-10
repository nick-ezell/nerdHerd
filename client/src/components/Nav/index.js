import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h2 className="navbar-item">nerdHerd</h2>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a className="navbar-item" href="/home">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">User</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">Profile</a>
                  <a className="navbar-item">Games</a>
                </div>
              </div>
              <div className="buttons">
                <a className="button is-light" href="/login">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
