import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import "./index.css";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Home from "./pages/Home";
import { ApiContext } from "./utils/UserState";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/games/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=json&filter=field:"
      )
      .then((res) => {
        const data = res.data.results;
        setApiData(
          data.map((i) => {
            return { guid: i.guid };
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ApiContext.Provider value={apiData}>
      <div>
        <Nav />
        <Router>
          <div className="container">
            <Switch>
              <Route exact path={["/", "/login"]}>
                <LoginPage />
              </Route>
              <Route exact path={"/signup"}>
                <SignupPage />
              </Route>
              <Route exact path="/user/profile"></Route>
              <Route exact path={"/home"}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
