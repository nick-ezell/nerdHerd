import React from "react";
import "./index.css";

const Nav = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    // <div className="nav">
    //   <nav className="navbar" role="navigation" aria-label="main navigation">
    //     <div className="navbar-brand">
    //       <h2 className="navbar-item">nerdHerd</h2>
    //       <label
    //         onClick={toggleNav}
    //         role="button"
    //         className="navbar-burger burger"
    //         aria-label="menu"
    //         aria-expanded="false"
    //         htmlFor="nav-toggle-state"
    //       >
    //         <span aria-hidden="true" />
    //         <span aria-hidden="true" />
    //         <span aria-hidden="true" />
    //       </label>

    //       <input type="checkbox" id="nav-toggle-state" />

    //       <div className="navbar-menu">
    //         <a className="navbar-item">Profile</a>
    //         <a className="navbar-item">Games</a>
    //       </div>
    //     </div>

    //     <div id="navbarBasicExample" className="navbar-menu">
    //       <div className="navbar-start"></div>

    //       <div className="navbar-end">
    //         <div className="navbar-item">
    //           <a className="navbar-item" href="/home">
    //             Home
    //           </a>
    //           <div className="navbar-item has-dropdown is-hoverable">
    //             <a className="navbar-link">User</a>

    //             <div className="navbar-dropdown">
    //               <a className="navbar-item">Profile</a>
    //               <a className="navbar-item">Games</a>
    //             </div>
    //           </div>
    //           <div className="buttons">
    //             <a className="button is-light" href="/login">
    //               Log in
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    // );
    <nav
      id="navStyle"
      className="navbar box"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src="./favicon.ico" alt="Logo" width="30" height="30" />
          &nbsp;<strong>nerdHerd</strong>
        </a>

        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
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
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="/home" className="navbar-item">
              Home
            </a>
            <a href="/Login" className="navbar-item">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
