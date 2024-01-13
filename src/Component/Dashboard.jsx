import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "../CSS files/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [isIndicatorDropdownOpen, setIsIndicatorDropdownOpen] = useState(false);
  const [isTimeBasedDropdownOpen, setIsTimeBasedDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const toggleIndicatorDropdown = () => {
    setIsIndicatorDropdownOpen(!isIndicatorDropdownOpen);
    // Close the other dropdown
    setIsTimeBasedDropdownOpen(false);
  };

  const toggleTimeBasedDropdown = () => {
    setIsTimeBasedDropdownOpen(!isTimeBasedDropdownOpen);
    // Close the other dropdown
    setIsIndicatorDropdownOpen(false);
  };

  const handleOrderClick = () => {
    navigate("/Orders");
  };
  const handleOpenPosClick = () => {
    navigate("/openorders");
  };
  const handlePosClick = () => {
    navigate("/returns");
  };

  return (
    <div>
      <div className="logodash">
        <img className="logocss" src="image/dashboard.png" alt="" />
        <div className="btmindicator">
          <button className="btnindi">Create Indicator Based-Strategy</button>
          <button className="btnindi">Create Time Based-Strategy</button>
        </div>
        <p>
          <i className="fa fa-bell-o bell"></i>
        </p>
        <Button className="loginbtn" onClick={openDrawer}>
          DK
        </Button>

        <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
          {/* Drawer content goes here */}
          <div style={{ width: 300, padding: "16px" }}>
            <Typography variant="h6">Drawer Content</Typography>
            <List>
              <ListItem
                button
                component={Link}
                to="/link1"
                onClick={closeDrawer}
              >
                <ListItemIcon>
                  <i className="fa fa-bell-o bell"></i>
                </ListItemIcon>
                <Typography variant="inherit"> My Account</Typography>
                <ListItemIcon>
                  <i
                    class="fa fa-angle-right"
                    style={{ marginLeft: "5.5rem" }}
                  ></i>
                </ListItemIcon>
              </ListItem>

              <ListItem
                button
                component={Link}
                to="/link2"
                onClick={closeDrawer}
              >
                <ListItemIcon>
                  <i className="fa fa-bell-o bell"></i>
                </ListItemIcon>
                <Typography variant="inherit">Daily Usage</Typography>
                <ListItemIcon>
                  <i
                    class="fa fa-angle-right"
                    style={{ marginLeft: "5.5rem" }}
                  ></i>
                </ListItemIcon>
              </ListItem>

              <ListItem
                style={{ marginTop: "26rem", color: "red" }}
                button
                component={Link}
                to="/link2"
                onClick={closeDrawer}
              >
                <ListItemIcon>
                  <i className="fa fa-bell-o bell" style={{ color: "red" }}></i>
                </ListItemIcon>
                <Typography variant="inherit">Logout</Typography>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-2 ">
            <div className="dashmain">
              <div className="dashboard">
                <div>
                  <i className="fa fa-arrows-alt icondas"></i>
                </div>
                <p className="dash">Dashboard</p>
              </div>
              <div className="dropdown-container">
                <button
                  className="css-1mv9tfz"
                  onClick={toggleIndicatorDropdown}
                >
                  <span className="indicatorbox">
                    <i className="fa fa-asterisk"></i>
                    <p className="indi"> Indicator</p>
                    <i className="fa fa-angle-down arrow"></i>
                  </span>
                </button>
                {isIndicatorDropdownOpen && (
                  <div className="dropdown-content">
                    <p className="dropli">
                      <Link className="linking" to="/link1">
                        My strategy
                      </Link>
                    </p>
                    <p className="dropli">
                      <Link className="linking" to="/link2">
                        Optimize
                      </Link>
                    </p>
                    <p className="dropli">
                      <Link className="linking" to="/link3">
                        Forward Test
                      </Link>
                    </p>
                    <p className="dropli">
                      <Link className="linking" to="/link4">
                        Live
                      </Link>
                    </p>
                  </div>
                )}
              </div>

              <div className="dropdown-container">
                <button
                  className="css-1mv9tfz"
                  onClick={toggleTimeBasedDropdown}
                >
                  <span className="indicatorbox">
                    <i className="fa fa-adjust"></i>
                    <p className="indi"> Time Based</p>
                    <i className="fa fa-angle-down arrow1"></i>
                  </span>
                </button>
                {isTimeBasedDropdownOpen && (
                  <div className="dropdown-content">
                    <p className="dropli">
                      <Link className="linking" to="/link1">
                        My strategy
                      </Link>
                    </p>
                    <p className="dropli">
                      <Link className="linking" to="/link2">
                        Optimize
                      </Link>
                    </p>
                    <p className="dropli">
                      <Link className="linking" to="/link3">
                        Forward Test
                      </Link>
                    </p>
                    <p className="dropli">
                      <Link className="linking" to="/link4">
                        Live
                      </Link>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <Link className="mv9tfz" to="/orders">
                  <i className="fa fa-at optlogo"> </i>
                  <p className="optionc">Option Pay Of</p>
                </Link>
              </div>
              <div>
                <Link className="mv9tfz" to="/orders">
                  <i className="fa fa-at optlogo"></i>
                  <p className="optionc">Connectors</p>
                </Link>
              </div>

              <div>
                <Link className="mv9tfz" to="/orders">
                  <i className="fa fa-at optlogo"></i>
                  <p className="optionc">Scanners</p>
                </Link>
              </div>

              <div>
                <Link className="mv9tfz" to="/orders">
                  <i className="fa fa-at optlogo"></i>
                  <p className="optionc">Astra</p>
                </Link>
              </div>

              <div>
                <Link className="mv9tfz" to="/orders">
                  <i className="fa fa-at optlogo"> </i>
                  <p className="optionc"> Create Basket</p>
                </Link>
              </div>

              <div>
                <Link className="mv9tfz" to="/orders">
                  <i className="fa fa-at optlogo"> </i>
                  <p className="optionc">Brokeers</p>
                </Link>
              </div>

              <div>
                <Link className="mv9tfz" to="/orders">
                  <i className="fa fa-at optlogo"> </i>
                  <p className="optionc">Order Book</p>
                </Link>
              </div>

              <div>
                <Link className="mv9tfz" to="/orders">
                  <i className="fa fa-at optlogo"> </i>
                  <p className="optionc">Option Position</p>
                </Link>
              </div>
            </div>
          </div>
       
          <div className="col-6 ">
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
                      to="/orders"
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
                      <p
                        className="borderbtm"
                        onClick={() => navigate("/orders")}
                      >
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
    

      <div className="container-last">
        <div className="row">
          <div className="col-4">
            <p className="astra">Astra Strategy</p>
            <div className="first">
              <div className="activfirst">
                <img className="activimg" src="image/dashboard.png" alt="" />
                <p className="activtxt">
                  Activation <p>R 0.0</p>
                </p>
                <div className="btncss">
                  <button className="btn btn-outline-info mt-2 btnactiv">
                    Copy
                  </button>
                  <button className="btn btn-outline-info mt-2 ml-2 btnactiv ">
                    Self
                  </button>
                  <button className="btn btn-info text-light mt-2">
                    Managed
                  </button>
                </div>
              </div>
              <div className="Castrocss">
                <i class="fa fa-user-circle-o"></i>
                <p className="cartoname"> CASTROLIND</p>
                <p className="other">+ 9 Others</p>
              </div>
              <div className="ptext">
                <p>Investing</p>
                <p>
                  Start algo trading with Mid-Cap Equity: Entry/exit timing...
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="ptext">
                    <p>Required Margin</p>
                    <p>₹50,000.</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ptext">
                    <p>PNL</p>
                    <p>AI Not Activated</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ptext">
                    <p><i class="fa fa-diamond" style={{fontSize:"48px",color:"red"}}></i></p>
                      <p>Medium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
          
            <div className="sec">
              <div className="activfirst">
                <img className="activimg" src="image/dashboard.png" alt="" />
                <p className="activtxt">
                  Garuda <p>R 0.0</p>
                </p>
                <div className="btncss">
                  <button className="btn btn-outline-info mt-2 btnactiv">
                    Copy
                  </button>
                  <button className="btn btn-outline-info mt-2 ml-2 btnactiv ">
                    Self
                  </button>
                  <button className="btn btn-info text-light mt-2">
                    Managed
                  </button>
                </div>
              </div>
              <div className="Castrocss">
                <i class="fa fa-user-circle-o"></i>
                <p className="cartoname"> BANKNIFTY24JA...</p>
                <p className="other">+ 1 Others</p>
              </div>
              <div className="ptext">
                <p>Trading</p>
                <p>
                Very High-risk Index (BNF & NF) trend-following strategy:...
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="ptext">
                    <p>Required Margin</p>
                    <p>₹50,000.</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ptext">
                    <p>PNL</p>
                    <p>AI Not Activated</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ptext">
                    <p><i class="fa fa-diamond" style={{fontSize:"48px",color:"red"}}></i></p>
                      <p>Medium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
          
            <div className="sec1">
              <div className="activfirst">
                <img className="activimg" src="image/dashboard.png" alt="" />
                <p className="activtxt">
                  Phenox <p>R 0.0</p>
                </p>
                <div className="btncss">
                  <button className="btn btn-outline-info mt-2 btnactiv">
                    Copy
                  </button>
                  <button className="btn btn-outline-info mt-2 ml-2 btnactiv ">
                    Self
                  </button>
                  <button className="btn btn-info text-light mt-2">
                    Managed
                  </button>
                </div>
              </div>
              <div className="Castrocss">
                <i class="fa fa-user-circle-o"></i>
                <p className="cartoname"> BANKNIFTY24JA...</p>
                <p className="other">+ 1 Others</p>
              </div>
              <div className="ptext">
                <p>Trading</p>
                <p>
                High-risk Index (BNF & NF) momentum strategy: Buy options...
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="ptext">
                    <p>Required Margin</p>
                    <p>₹50,000.</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ptext">
                    <p>PNL</p>
                    <p>AI Not Activated</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ptext">
                    <p><i class="fa fa-diamond" style={{fontSize:"48px",color:"red"}}></i></p>
                      <p>Medium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
