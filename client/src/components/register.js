
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";
import "./login";
import validator from "validator";
const Register = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const Senddata = async () => {
    if (
      data.password === data.confirmpassword &&
      data.password.length > 0 &&
      data.email.length > 0 &&
      validator.isEmail(data.email)
    ) {
      axios({
        url: "http://localhost:3005/register",
        method: "POST",
        headers: {},
        data: {
          email: data.email,
          password: data.password,
          confirmpassword: data.confirmpassword,
        },
      }).then((res) => {
          res.send(alert(`${data.email} added successfully`));
        }).catch((err) => {
          alert("please add valid credentials");
          console.log(err);
        });
    } else {
      if (data.email.length === 0) {
        alert("email cannot be empty");
      } else if (!validator.isEmail(data.email)) {
        alert("email is not valid");
      } else if (data.password.length === 0) {
        alert("password cannot be empty");
      } else {
        alert("password and confirm password should be same");
      }
    }
  };

  return (
    <div>
      <div className="register_container">
        <div className="register">
          <div>
            <h1 className="h1logo">Signup</h1> <br />
            <label>Email</label><br />
            <input
              type="email"
              name="email"
              className="registerip"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />{" "}
            <br />
            <label>Password</label><br />
            <input
              type="password"
              name="password"
              className="registerip"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />{" "}
            <br />
            <label>ConfirmPassword</label><br />
            <input
              type="password"
              name="confirmpassword"
              className="registerip"
              onChange={(e) => {
                setData({ ...data, confirmpassword: e.target.value });
              }}
            /><br/>
            <button className="reg" onClick={Senddata}>Signup</button> <br />
          </div>
          {/* <p className="footer1">Login</p> */}
        </div>
       
        <p
          className="registerfooter"
          onClick={() => {
            Navigate("/");
          }}
        >
        Login
        </p>
        
      </div>
      
    </div>
  );
};

export default Register;