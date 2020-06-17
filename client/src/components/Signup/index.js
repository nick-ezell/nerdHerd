import React, { useState } from "react";
import db from "../../utils/db/db";
// import { useUserContext } from "../../utils/UserState";

const Signup = () => {
  // const [state, dispatch] = useUserContext();
  const [UserData, setUserData] = useState({});

  const handleLogin = () => {
    // const { email, username, password } = UserData;
    db.createUser(UserData)
      .then((res) => {
        console.log(res);
        // dispatch(data, {
        //   type: "login",
        //   payload: data,
        // });
      })

      .catch((err) => console.log("Hey, this happened: " + err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserData({ ...UserData, [name]: value });
    console.log(UserData);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (UserData.email && UserData.password) {
      handleLogin();
      console.log(UserData);
    }
  }
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
                        onChange={handleInputChange}
                        id="email"
                        name="email"
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
                        onChange={handleInputChange}
                        id="username"
                        name="username"
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
                        onChange={handleInputChange}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="*******"
                        className="input"
                        required
                      />
                      <span className="is-size-7">
                        &nbsp;&nbsp;&nbsp;(8 characters, 1 number, 1 special)
                      </span>
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <a href="/home" id="buttonhref">
                      <button
                        className="button is-dark"
                        onClick={handleFormSubmit}
                      >
                        Sign up
                      </button>
                    </a>
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
