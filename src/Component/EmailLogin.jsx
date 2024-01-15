import React from "react";
import "../CSS files/EmailLogin.css";
const EmailLogin = () => {
  return (
    <>
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
            <div className="emaillogin">
              <div className="imglogo">
                <img className="emaillogo" src="image/dashboard.png" alt="" />
                <p className="weltext">Welcome Back</p>
              </div>

              <div className="formdesign">
                <form action="">
                  <div className="labelcss">
                    <label className="mb-2" htmlFor="name">
                      Email
                    </label>
                    <br />
                    <input className="inputc" type="text" />
                  </div>
                  <div className="labelcss">
                    <label className="mb-2" htmlFor="Password">
                      Password
                    </label>
                    <br />
                    <input className="inputc" type="Password" />
                  </div>
                  <div>
                    <a className="linktag" href="">
                  
                      <a href="/forget" className="forgt">Forget Password</a>{" "}
                    </a>
                  </div>
                  <button className="logincss">Login</button>
                  <p className="newkee">New to KEEV ? <a className="signlink" href="/signup">Sign Up</a></p>
                  <hr className="hrline" />
                  <p className="dontmail">Didn't get activation mail ? <a className="signlink" href="">Resend Activation Mail</a> </p>
                  <a className="resendlink" href="">Resend Activation Mail</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmailLogin;
