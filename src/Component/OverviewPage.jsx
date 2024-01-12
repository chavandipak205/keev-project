import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Overview.css";
import "bootstrap/dist/css/bootstrap.min.css";

const OverviewPage = () => {
  const navigate = useNavigate();

  const handleOrderClick=()=>{
    navigate("/Orders")
  }
  const handleOpenPosClick = () => {
    navigate("/openorders");
  };
  const handlePosClick=()=>{
    navigate("/returns")
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 ">
            <div className="row ">
              <div className="overvie">
                <div className="col-6 ">
                  <p className="over">Overview</p>
                  <div className="con">
                    <span className="fundimg">
                      <img className="imgcss" src="/Image/funds.svg" alt="" />
                    </span>
                    <div className="totlfnd">
                      <p className="fontcolor">
                        Total Funds <br />
                        <span className="rupcolr"> ₹ 0 </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6  secdiv">
                  <div className="contersec">
                    <span className="returns">
                      <img
                        className="imgca"
                        src="/Image/totalreturn.svg"
                        alt=""
                      />
                    </span>
                    <div className="totlfnd" onClick={handlePosClick}>
                      <p className="fontcolor">
                        Total Returns <br />
                        <span className="rupcolr"> ₹ 0 </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="delpoycss">
                  <div className="deplo">
                    <p>Deployed</p>
                  </div>
                  <div className="deplo">
                    <Link
                      to="your-live-trade-url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liveTradeLink"
                    >
                      <p>
                        {" "}
                        <i class="fa fa-bullseye"></i> Live Trade
                      </p>
                    </Link>
                    <Link
                      to="your-not-deployed-url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liveTradeLink"
                    >
                      <span className="depspn">Not Deployed</span>
                    </Link>
                  </div>

                  <div className="deplo">
                    <Link
                      to="your-live-trade-url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liveTradeLink"
                    >
                      <p>
                        {" "}
                        <i class="fa fa-hand-o-right"></i> Forward Test
                      </p>
                    </Link>
                    <Link
                      to="your-not-deployed-url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liveTradeLink"
                    >
                      <span className="depspn">Not Deployed</span>
                    </Link>
                  </div>

                  <div className="deplo">
                    <Link
                      to="your-live-trade-url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liveTradeLink"
                    >
                      <p>
                        {" "}
                        <i class="fa fa-user-circle-o"></i> Active Brokers
                      </p>
                    </Link>
                    <Link
                      to="your-not-deployed-url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liveTradeLink"
                    >
                      <span className="depspn">No Active Brokers</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row  ">
                <div className="col-8 orders">
                  <div className="col-6 ">
                    <p>Orders</p>
                    <div>
                      <div className="openpos" onClick={handleOpenPosClick}>
                        <span className="returns">
                          <img
                            className="imgca"
                            src="/Image/save posit.svg"
                            alt=""
                          />
                        </span>
                        <div className="totlfnd">
                          <p className="fontcolor">
                            Open Position <br />
                            <span className="rupcolr"> 0 </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="executd" onClick={handleOrderClick}>
                      <span className="returns">
                        <img
                          className="imgca"
                          src="/Image/ex orders.svg"
                          alt=""
                        />
                      </span>
                      <div className="totlfnd">
                        <p className="fontcolor">
                          Executed Orders <br />
                          <span className="rupcolr"> 0 </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4"></div>
                </div>
              
                <div className="col-4">
                  <div className="midpart">
                    <div className="walk">
                      <p className="borderbtm1">Walkthrough</p>
                    </div>
                    <div>
                      <p className="borderbtm" onClick={handleOpenPosClick}>
                        Create Strategy{" "}
                        <i class="fa fa-angle-right gtrclass"></i>
                      </p>
                    </div>
                    <div>
                      <p className="borderbtm" onClick={handleOpenPosClick}>
                        Optimisation <i class="fa fa-angle-right gtrclass"></i>
                      </p>
                    </div>
                    <div>
                      <p className="borderbtm" onClick={handleOpenPosClick}>
                        Live Trade<i class="fa fa-angle-right gtrclass"></i>
                      </p>
                    </div>
                    <div>
                      <p className="borderbtm" onClick={handleOpenPosClick}>
                        Forward Test <i class="fa fa-angle-right gtrclass"></i>
                      </p>
                    </div>
                    <div>
                      <p className="borderbtm" onClick={handleOpenPosClick}>
                        Astra <i class="fa fa-angle-right gtrclass"></i>
                      </p>
                    </div>
                    <div>
                      <p className="borderbtm2" onClick={handleOpenPosClick}>
                        Backtesting <i class="fa fa-angle-right gtrclass"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="row">
              <div className="col backcol">
                <div className="chakra-stack css-19xx6yd">
                  <div className="chakra-stack css-snzyz">
                    <p className="chakra-text css-1flyc9m">
                      <span>Starter</span>
                    </p>
                    <p className="chakra-text css-1el0xp0">11 Days Left</p>
                  </div>
                  <div className="chakra-stack css-lvugna">
                    <p className="chakra-text css-0">Backtest (Per Day)</p>
                    <p className="chakra-text css-i2uism">0/20</p>
                  </div>
                  <div className="children css-1lhsode">
                    <p className="chakra-text ">Option Backtesting (per day)</p>
                    <p className="chakra-text ">0 / 10</p>
                  </div>
                  <div className="children css-1lhsode">
                    <p className="chakra-text ">Forward Test</p>
                    <p className="chakra-text ">0 / 5</p>
                  </div>
                  <div className="children css-1lhsode">
                    <p className="chakra-text ">Live Trade</p>
                    <p className="chakra-text ">0 / 5</p>
                  </div>
                  <div className="children css-1lhsode">
                    <p className="chakra-text ">External Order</p>
                    <p className="chakra-text ">0 / 10</p>
                  </div>
                  <div className="children css-1lhsode fontpri">
                    <p className="chakra-text ">Pricing</p>
                    <Link className="linkto" to="/pricing">
                      See the Plans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col contearn">
                <div className="">
                  <img className="imgearn" src="/image/refearn.svg" alt="" />
                </div>
                <div className="para">
                  <p>Refer & Earn</p>
                  <p>
                    Refer your friends and get 10% of <br />
                    their fee as cashback for the first <br /> 3 months.
                  </p>

                  <button
                    className="btn btn-primary mb-2"
                    onClick={handleOpenPosClick}
                  >
                    Refer A Friend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
