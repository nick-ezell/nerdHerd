import React from "react";
import { useUserContext } from "../../utils/UserState";
// import createUser from "../../utils/db/db";

const Signup = () => {
  const [userState] = useUserContext();
  const [state, setState] = React.useState(userState);
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(state);
    console.log(userState);
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
                        onChange={(event) =>
                          setState({ ...state, email: event.target.value })
                        }
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
                        onChange={(event) =>
                          setState({ ...state, username: event.target.value })
                        }
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
                        onChange={(event) =>
                          setState({ ...state, password: event.target.value })
                        }
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
                      <a href="/home">ign up</a>
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
