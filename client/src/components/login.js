import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
const Login = () => {
  const Navigate = useNavigate();

  const [state, setState] = useState({ email: "", password: "" });


  const handleLogin = () => {
    axios({
      url: "http://localhost:3005/",
      method: "POST",
      headers: {},
      data: { email: state.email, password: state.password },
    })
      .then((loginData) => {
        localStorage.setItem("authorization", loginData.data.authToken);
        Navigate("/homepage");
      })
      .catch((err) => {
        
        console.log(err);
      });
  };

  return (
    <div className="login_container">
      <div className="login">
        <h2 className="loginh1">Login</h2> <br />
        <label>Email</label><br />
        <input
          className="logininput"
          type="text"
          id="username"
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}
        />{" "}
        <br />
        <div className="input-element-wrapper">
        <label>Password</label><br />
          <input
            className="logininput"
            type="text"
            id="passwordLI"
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
          />
           <br></br>
          <input
            type="checkbox"
          />Remember me
         
        </div>
        <button className="lbtn" onClick={handleLogin}>
          login
        </button>{" "}
        <br />
        
        <p
          onClick={() => {
            Navigate("/register");
          }}
          className="registertext"
        >
          Forgot Password?
        </p><br />
        <p>Need an account?</p><Link to="/register">SignUp</Link>

      </div>
    </div>
  );
};

export default Login;