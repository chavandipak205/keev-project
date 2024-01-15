import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../CSS files/Signup.css";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="container-flude">
        <div className="row">
          <div className="col-7">
            <div className="leftside">
              <p className="trading">SIMPLIFYING AUTOMATED TRADING</p>
              <img className="logoi" src="image/loginimg.gif" alt="" />
              <p className="paratrad">
                Use our No-code platform and NEVER miss a <br />
                trade again!
              </p>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="signuppage">
                <img className="signlogo" src="image/dashboard.png" alt="" />
                <p className="welckeev">Hi, Welcome to Keev</p>
                <p className="trialcs">Start your 10-day free trial today</p>
              </div>
              <form action="">
                <div className="namecs">
                  <label htmlFor="">Full Name</label>
                  <br />
                  <input className="nameinp" type="text" /> <br />
                </div>{" "}
                <br />
                <div className="namecs">
                  <label htmlFor="">Mobile No</label>
                  <div class="input-group mb-3">
                    <span class="input-group-text ninty1" id="basic-addon1">
                      +91
                    </span>
                    <input className="mobinp" type="text" />
                  </div>{" "}
                  <br />
                  <div className="emailcs">
                    <label htmlFor="">Email</label>
                    <br />
                    <input className="nameinp" type="email" /> <br />
                  </div>{" "}
                  <br />
                  <div className="pass-container">
                    <label htmlFor="password">Password</label>
                    <br />
                    <div className="password-input-container">
                      <input
                        id="password"
                        className="password-input"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="eye-icon"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <div className="checklink">
                    <input type="checkbox" />
                    <p className="term-serv">
                      i agree with the <a className="linkcssa" href="">Terms and Services  </a>  and i
                      accept them
                    </p>
                  </div>
                  <button className="joincss">Join for Free</button>
                </div>
                <p className="alredcss">Already on KEEV ? <a className="linkcssa" href="/login">Login</a> </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
