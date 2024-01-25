import React, { useState } from "react";
import "./LoginSignup.css";
// import images
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {/* i want to hide name during login */}
        {/* if action equals login return empty div */}
        {action === "Login" ? (
          <div> </div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" srcset="" />
            <input type="text" name="" placeholder="Name" id="" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" srcset="" />
          <input type="email" name="" placeholder="E-Mail" id="" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" srcset="" />
          <input type="password" name="" placeholder="Password" id="" />
        </div>
      </div>
      {/* forget pass */}
      {/* hide cant remember from sign uo */}
      {action === "Sign Up"?(<div></div>):(
        <div className="forgetpass">
        Can't remember password?<span> Click Here!</span>{" "}
      </div>
      )}
      
      <div className="submit_sec">
        {/* we dynamically provide the class name using ternary operator */}
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
