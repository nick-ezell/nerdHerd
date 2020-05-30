import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <div>
          <label for="username">Email:</label>
          <input type="text" name="email"></input>
        </div>

        <div>
          <label for="pass">Password:</label>
          <input type="password" name="password" minlength="8" required></input>
        </div>
        <p>
          No account? <a href="/signup">Sign up here!</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
