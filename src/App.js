import logo from "./logo.svg";
import "./App.css";
import OverviewPage from "./Component/OverviewPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Home from './Component/Home';
import Orders from "./Component/Orders";
import Login from "./Component/Login";
import EmailLogin from "./Component/EmailLogin";
import Signup from "./Component/Signup";
import ForgetPass from "./Component/ForgetPass";



function App() {
  return (
    <div className="App">
    
      <Router>
      <Routes>
      {/* <Route path="/home" element={<Home />} /> */}

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<EmailLogin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget" element={<ForgetPass />} />
      {/* <Route path="/dashbord" element={<Dashboard />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/openorders" element={<openorders />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/returns" element={<returns />} />
      <Route path="/pricing" element={<pricing />} /> */}
   
     
 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
