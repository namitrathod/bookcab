/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import logo from '../assets/logo.png';

const DriverLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [driver, setDriver] = useState({});
  const navigate = useNavigate();

  const formhandler = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const driverData = { email: email, password: password };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/drivers/login`, driverData)
    // console.log(driverdata);
    if (response.status === 200) {
      const data = response.data;
      setDriver(data.user);
      localStorage.setItem('token', data.token);
      navigate('/driver-home');
    }
    setEmail('');
    setPassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src={logo} alt="Logo" className='w-28 mb-3' />
        <form onSubmit={formhandler}>
          <h3 className="text-3xl font-medium mb-3"> What&apos;s your email</h3>
          <input required value={email} onChange={(e) => { setEmail(e.target.value) }} className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full test-lg placeholder:text-base" type="email" placeholder="your Email" />
          <h3 className="text-3xl font-medium mb-3">Enter Password</h3>
          <input required value={password} onChange={(e) => { setPassword(e.target.value) }} className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="your Password" />
          <button className="bg-[#111] rounded text-white font-semibold mb-7 px-2 py-2 w-full text-2xl placeholder:text-base" type="submit">Login</button>
        </form>
        <p className='mb-5 text-center text-lg'>Join our fleet ? <Link to="/driver-signup" className="text-blue-600">Register as a Driver</Link></p>
      </div>

      <div>
        <button className="bg-[#10b461] rounded text-black font-semibold mb-7 px-2 py-2 w-full text-2xl placeholder:text-base" type="button" onClick={() => window.location.href = '/user-login'}>Sign in as User</button>
      </div>
    </div>
  )
}

export default DriverLogin