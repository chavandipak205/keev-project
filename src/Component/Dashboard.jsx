import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS files/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isIndicatorDropdownOpen, setIsIndicatorDropdownOpen] = useState(false);
  const [isTimeBasedDropdownOpen, setIsTimeBasedDropdownOpen] = useState(false);
  const handleclcik=()=>{
    navigate('/Orders')
  }

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

  const handleLinkClick = (route) => {
    navigate(route);
    setIsIndicatorDropdownOpen(false);
    setIsTimeBasedDropdownOpen(false);
  };

  return (
    <div>
      <div className="logodash">
        <img className="logocss" src="image/dashboard.png" alt="" />
        <div className="btmindicator">
          <button className="btnindi">Create Indicator Based-Strategy</button>
          <button className="btnindi">Create Indicator Based-Strategy</button>
        </div>
        <p>
          <i className="fa fa-bell-o bell"></i>
        </p>
        <button className="loginbtn" onClick={() => {}}>
          DK
        </button>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div className="dashboard">
              <div>
                <i className="fa fa-arrows-alt icondas"></i>
              </div>
              <p className="dash">Dashboard</p>
            </div>
            <div className="dropdown-container">
              <button className="css-1mv9tfz" onClick={toggleIndicatorDropdown}>
                <span className="indicatorbox">
                  <i className="fa fa-asterisk"></i>
                  <p className="indi"> Indicator</p>
                  <i className="fa fa-angle-down arrow"></i>
                </span>
              </button>
              {isIndicatorDropdownOpen && (
                <div className="dropdown-content">
                  <ul className="dropul">
                    <li
                      className="dropli"
                      onClick={() => handleLinkClick("/link1")}
                    >
                      My strategy
                    </li>
                    <li
                      className="dropli"
                      onClick={() => handleLinkClick("/link2")}
                    >
                      Optimize
                    </li>
                    <li
                      className="dropli"
                      onClick={() => handleLinkClick("/link3")}
                    >
                      Forward Test
                    </li>
                    <li
                      className="dropli"
                      onClick={() => handleLinkClick("/link3")}
                    >
                      Live
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="dropdown-container">
              <button className="css-1mv9tfz" onClick={toggleTimeBasedDropdown}>
                <span className="indicatorbox">
                  <i className="fa fa-adjust"></i>
                  <p className="indi"> Time Based</p>
                  <i className="fa fa-angle-down arrow"></i>
                </span>
              </button>
              {isTimeBasedDropdownOpen && (
                <div className="dropdown-content">
                  <ul className="dropul">
                    <li
                      className="dropli"
                      onClick={() => handleLinkClick("/link1")}
                    >
                      Create
                    </li>
                    <li
                      className="dropli"
                      onClick={() => handleLinkClick("/link2")}
                    >
                      My strategy
                    </li>
                    <li
                      className="dropli"
                      onClick={() => handleLinkClick("/link3")}
                    >
                      Forward Test
                    </li>
                    <li
                      className="dropli"
                      onClick={() => handleLinkClick("/link3")}
                    >
                      Live
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              <button onClick={handleclcik} className="css-1mv9tfz">
              <i className="fa fa-at optlogo"></i> <p className="option">
               Option Pay Of </p>  </button>
            </div>
          </div>

          <div className="col-7">Main</div>
          <div className="col-3">Side bar </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
