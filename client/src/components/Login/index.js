import React, { useState } from "react";
import db from "../../utils/db/db";
// import { useUserContext, useUserState } from "../../utils/UserState";

const Login = () => {
  // const [state, dispatch] = useUserContext();

  // const [ userState, setUserState] = useUserState();

  // Setting our component's initial state
  const [setUser] = useState([]);
  const [formData, setFormData] = useState({});

  const handleLogin = () => {
    const { email, password } = formData;
    db.LoginUser(email, password)
      .then((res) => db.getUserById({ _id: res.data._id }))
      .then((res) => setUser(res.data))
      .catch((err) => console.log("Hey, this happened: " + err));
  };

  // Loads all books and sets them to books
  // function handleLogin(formData, event) {
  //   event.preventDefault();

  //   // LoginUser(formData.email)
  //   //   .then((res) => setUser(res.data))
  //   //   .catch((err) => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formData.email && formData.password) {
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
                      className="button is-dark"
                      onClick={(event) => handleFormSubmit(event)}
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
