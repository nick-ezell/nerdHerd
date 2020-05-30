import React from "react";

const Signup = () => {
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
      </div>
    </div>
  );
};

export default Signup;
