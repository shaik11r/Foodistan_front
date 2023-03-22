import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "../landingpage/LandingPage";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleSubmit = async (event) => {
    console.log("signin clicked");
    event.preventDefault();
    const user = { email, password };
    try {
      const response = await axios.post("http://localhost:3004/login", user);
      console.log(response.data);
      if (response.status === 200) {
        setIsLoggedIn(true);
      }
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <LandingPage />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="login">
              <div className="email">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  id="userEmail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter Email"
                  required
                ></input>
              </div>
              <div className="email">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter Password"
                  required
                ></input>
                <br />
              </div>
              <br />
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default LoginPage;
