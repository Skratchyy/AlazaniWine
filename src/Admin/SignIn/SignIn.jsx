import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  // Post Function to check the password
  const handleSubmit = async (u, p) => {
    // must be done !
  };

  return (
    <div className="SignIn-bg">
      <div className="SignIn-wrapper">
        <div className="SignIn-form">
          <div className="userName">
            <label htmlFor="user">მომხმარებელი</label>
            <input
              name="user"
              type="text"
              placeholder="user@example.com"
              value={login} // Bind the 'login' state to the input value
              onChange={(e) => setLogin(e.target.value)} // Update the 'login' state on input change
            />
          </div>
          <div className="passWord">
            <label htmlFor="password">პაროლი</label>
            <input
              name="password"
              type="password"
              placeholder="*******"
              value={password} // Bind the 'password' state to the input value
              onChange={(e) => setPassword(e.target.value)} // Update the 'password' state on input change
            />
          </div>
          <div className="SignIn-submit">
            <button
              className="SignIn-submit-button"
              onClick={() => handleSubmit(login, password)} // Pass the 'login' and 'password' values to handleSubmit
            >
              შესვლა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
