import React from "react";
import "../CSS files/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Component/firebaseConfig";


const Login = () => {

console.log(auth);

  const Navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Handle the result or navigate to another page
      console.log("User successfully logged in:", result.user);
      Navigate("/dashbord");
    } catch (error) {
      console.error("Error during login:", error);
    }
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
            <div className="rightside">
            <div className="imgright">
                <img src="image/dashboard.png" alt="" />
                <p className="welc">Welcome Back</p>
                <p className="logcas">Login With</p>
                <div className="icon">
                  <div className="googlimg" onClick={handleLogin}>
                    <img className="google" src="image/google.png" alt="" />
                  </div>
                  <div className="googlimg" onClick={() => Navigate("/")}>
                    <img className="google" src="image/email.png" alt="" />
                  </div>
                  <div className="googlimg" onClick={() => handleLogin("whatsapp")}>
                    <img className="google" src="image/whatsapp.gif" alt="" />
                  </div>
                </div>
              </div>
              <hr className="brtag" />
              <p className="orcss">OR</p>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="btndiv">
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img src="image/dhana.svg" alt="" />
                      Bigul
                    </button>
                  </div>{" "}
                  <br />
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img
                        src="image/espro.svg"
                        alt=""
                        height="20px"
                        width="20px"
                      />
                      Expresso
                    </button>
                  </div>
                  <br />
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img className="duckimg" src="image/manou.png" alt="" />
                      Moneysukh
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="btndiv">
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img src="image/dhan.svg" alt="" />
                      Dhan
                    </button>
                  </div>{" "}
                  <br />
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img
                        src="image/fyers.png"
                        alt=""
                        height="25px"
                        width="25px"
                      />
                      Fyres
                    </button>
                  </div>{" "}
                  <br />
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img className="duckimg" src="image/upstox.png" alt="" />
                      Upstox
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="btndiv">
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img
                        src="image/duck.png"
                        alt=""
                        height="20px"
                        width="20px"
                      />
                      Duck
                    </button>
                  </div>{" "}
                  <br />
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img
                        src="image/sharekhan.svg"
                        alt=""
                        height="25px"
                        width="25px"
                      />
                      Sharekhan
                    </button>
                  </div>{" "}
                  <br />
                  <div className="bigul">
                    <button
                      className="bigulbtn"
                      onClick={() => Navigate("/home")}
                    >
                      <img className="duckimg" src="image/motilal.png" alt="" />
                      Motilal Oswal
                    </button>
                  </div>
                </div>
              </div>
              <button className="otherbtn">Other Brokers</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
