import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

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
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
