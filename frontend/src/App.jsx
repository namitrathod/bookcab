import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import DriverLogin from "./pages/driverLogin";
import DriverSignup from "./pages/driverSignup";

// import React from 'react'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/driver-login" element={<DriverLogin/>} /> 
        <Route path="/driver-signup" element={<DriverSignup/>} />
      </Routes>
    </div>
  )
}

export default App