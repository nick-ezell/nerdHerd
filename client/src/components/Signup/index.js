import React from "react";
import createUser from "../../utils/db/db";

const Signup = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").innerHTML;
    const username = document.getElementById("username").innerHTML;
    const password = document.getElementById("password").innerHTML;
    const userData = {
      email: email,
      username: username,
      password: password,
    };
    console.log(userData);
  };
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        id="email"
                        type="email"
                        placeholder="thisismyemail@gmail.com"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left">
                      <input
                        id="username"
                        type="username"
                        placeholder="e.g. Leeroy Jenkins"
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        id="password"
                        type="password"
                        placeholder="*******"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-dark" onClick={handleSignUp}>
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
