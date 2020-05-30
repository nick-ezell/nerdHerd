import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <LoginPage />
          </Route>
          <Route exact path={["/signup"]}>
            <SignupPage />
          </Route>
          <Route exact path="/user/profile"></Route>
          <Route exact path={"/home"}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
