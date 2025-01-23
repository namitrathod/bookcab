/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const formhandler = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      // console.log(response);
      if (response.status === 200) {
        const data = response.data;
        // console.log(data);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        // console.log(data.user);
        navigate('/home');
      }
    } catch (error) {
      console.error('Error:', error.response.data); // Log the error response
    }
    setEmail('');
    setPassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-5xl font-bold mb-7 ">CabGo</h1>
        <form onSubmit={formhandler}>
          <h3 className="text-3xl font-medium mb-3"> What&apos;s your email</h3>
          <input required value={email} onChange={(e) => { setEmail(e.target.value) }} className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full test-lg placeholder:text-base" type="email" placeholder="your Email" />
          <h3 className="text-3xl mb-3 font-medium">Enter Password</h3>
          <input required value={password} onChange={(e) => { setPassword(e.target.value) }} className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="your Password" />
          <button className="bg-[#111] text-white font-semibold rounded mb-7 px-2 py-2 w-full text-2xl placeholder:text-base" type="submit">Login</button>
        </form>
        <p className='mb-5 text-center text-lg'>New Here?<Link to="/user-signup" className="text-blue-600">Create a new account</Link></p>
      </div>

      <div>
        <button className="bg-[#10b461] text-black font-semibold rounded mb-7 px-2 py-2 w-full text-2xl placeholder:text-base" type="button" onClick={() => window.location.href = '/driver-login'}>Sign in as Driver</button>
      </div>
    </div>
  )
}

export default UserLogin