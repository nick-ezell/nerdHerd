import React, { useState } from "react";
import db from "../../utils/db/db";
// import { ApiContext, UserContext } from "../../utils/UserState";

const Login = () => {
  // Setting our component's initial state
  const [UserData, setUserData] = useState({});
  // const api = useContext(ApiContext);
  // const user = useContext(UserContext);

  function handleLogin() {
    db.LoginUser(UserData)
      .then((UserData) => {
        console.log(UserData.data);
        // console.log(res.data);
        // const data = res.data;
        // console.log(data);
        // setUserData(data);
        // console.log(UserData);
      })
      .catch((err) => console.log("Hey, this happened: " + err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserData({ ...UserData, [name]: value });
    console.log(UserData);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (UserData.email && UserData.password) {
      handleLogin();
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
                        type="email"
                        name="email"
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
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={handleInputChange}
                        name="password"
                        type="password"
                        placeholder="********"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      &nbsp;Remember me
                    </label>
                  </div>
                  <div className="field">
                    <button
                      name="login"
                      className="button is-dark"
                      onClick={handleFormSubmit}
                    >
                      Login
                    </button>
                  </div>
                  <p>
                    No account? <a href="/signup">Sign up here!</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
