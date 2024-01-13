import logo from "./logo.svg";
import "./App.css";
import OverviewPage from "./Component/OverviewPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Component/Dashboard";

// import PermanentDrawerRight from "./Component/PermanantDrawerRight";

import Home from './Component/Home';


function App() {
  return (
    <div className="App">
    
      <Router>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dashbord" element={<Dashboard />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/openorders" element={<openorders />} />
      <Route path="/orders" element={<orders />} />
      <Route path="/returns" element={<returns />} />
      <Route path="/pricing" element={<pricing />} />
   
     
 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
