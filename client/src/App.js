import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import "./index.css";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Home from "./pages/Home";
import { ApiContext, GameContext } from "./utils/UserState";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);

  const [gameData, setGameData] = useState([]);

  const length = 1;

  useEffect(() => {
    axios
      // 3060-5
      .get(
        `https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/games/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=json&platforms=179&&limit=10`
      )
      .then((res) => {
        const data = res.data.results;
        setGameData(
          data.map((i) => {
            return {
              name: i.name,
              deck: i.deck,
            };
          })
        );
      })
      .then(
        axios
          // 3060-5
          .get(
            // "https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/platform/3060-5/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f"
            `https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/games/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=json&platforms=179&limit=10`
          )
          .then((res) => {
            const data = res.data.results;
            setApiData(
              data.map((i) => {
                return i.image.screen_large_url;
              })
            );
          })
      )
      .catch(function (error) {
        console.log(error);
      });
  }, [length]);

  // useEffect(() => {
  //   // `https://cors-anywhere.herokuapp.comhttps://www.giantbomb.com/api/images/${guid}/?api_key=${process.env.REACT_APP_API_KEY}`

  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [length]);

  return (
    <ApiContext.Provider value={apiData}>
      <GameContext.Provider value={gameData}>
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
      </GameContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
