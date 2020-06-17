import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import "./index.css";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Home from "./pages/Home";
import { ApiContext, GameContext, UserProvider } from "./utils/UserState";
import axios from "axios";

function App() {
  const [apiData] = useState([]);

  const [gameData, setGameData] = useState([]);

  const length = 1;

  useEffect(() => {
    axios
      // 3060-5
      .get(
        `https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/games/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=json&platforms=176&&limit=5`
      )
      .then((res) => {
        const data = res.data.results;
        console.log(data);

        setGameData(
          data.map((i) => {
            return {
              name: i.name,
              deck: i.deck,
              image: i.image.original_url,
            };
          })
        );
      })
      // .then(
      //   axios
      //     // 3060-5
      //     .get(
      //       // "https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/platform/3060-5/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f"
      //       `https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/games/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=json&platforms=179&limit=10`
      //     )
      //     .then((res) => {
      //       const data = res.data.results;
      //       console.log(data);
      //       setApiData(
      //         data.map((i) => {
      //           return {
      //             name: i.name,
      //             description: i.deck,
      //             image: i.image.screen_large_url,
      //           };
      //         })
      //       );
      //     })
      // )
      .catch(function (error) {
        console.log(error);
      });
  }, [length]);

  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
