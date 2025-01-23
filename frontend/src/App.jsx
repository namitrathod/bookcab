import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import DriverLogin from "./pages/driverLogin";
import DriverSignup from "./pages/driverSignup";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import DriverHome from "./pages/DriverHome";
import DriverProtectedWrapper from "./pages/DriverProtectedWrapper";
import DriverLogout from "./pages/DriverLogout";

// import React from 'react'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/driver-signup" element={<DriverSignup />} />
        <Route path="/home" element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
        <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>}></Route>
        <Route path="/driver-home" element={<DriverProtectedWrapper><DriverHome /></DriverProtectedWrapper>}></Route>
        <Route path="/driver/logout" element={<UserProtectedWrapper><DriverLogout /></UserProtectedWrapper>}></Route>
      </Routes>
    </div>
  )
}

export default App