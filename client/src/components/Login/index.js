import React, { useState } from "react";
import db from "../../utils/db/db";
import { useUserContext } from "../../utils/UserState";

const Login = () => {
  const [state, dispatch] = useUserContext();

  // Setting our component's initial state
  const [UserData, setUserData] = useState({});

  const handleDispatch = (payload) => {
    const data = payload;
    dispatch({
      type: "login",
      payload: data,
    });
  };

  const handleLogin = () => {
    db.LoginUser(UserData)
      .then((UserData) => {
        setUserData(UserData);
      })
      .then((res) => {
        console.log(res);
        handleDispatch(res);
      })

      .catch((err) => console.log("Hey, this happened: " + err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserData({ ...UserData, [name]: value });
    // console.log(UserData);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (UserData.email && UserData.password) {
      handleLogin();
      console.log(state);
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
