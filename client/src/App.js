import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Home from "./pages/Home";
import { UserProvider } from "./utils/UserState";

function App() {
  return (
    <div>
      <UserProvider>
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
      </UserProvider>
    </div>
  );
}

export default App;
