// import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userdata, setUserdata] = useState({});

  const formhandler=(e)=>{
    e.preventDefault();
    console.log(email,password);
    setUserdata({email:email,password:password});
    console.log(userdata);
    setEmail('');
    setPassword('');}
  return (
<div className="p-7 h-screen flex flex-col justify-between">
    <div>
        <h1 className="text-3xl font-bold mb-5 ">CabGo</h1>
        <form onSubmit={formhandler}>
            <h3 className="text-lg font-medium mb-2"> What&apos;s your email</h3>
            <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full test-lg placeholder:text-base" type="email" placeholder="your Email" />
            <h3 className="text-lg font-medium">Enter Password</h3>
            <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="your Password" />
            <button className="bg-[#111] text-white font-semibold mb-7 px-2 py-2 w-full text-lg placeholder:text-base" type="submit">Login</button>
        </form>
        <p className='mb-5 text-center'>New Here?<Link to="/user-signup" className="text-blue-600">Create a new account</Link></p>
    </div>

    <div>
    <button className="bg-[#eee] text-black font-semibold mb-7 px-2 py-2 w-full text-lg placeholder:text-base" type="button" onClick={() => window.location.href = '/driver-login'}>Sign in as Driver</button>
    </div>
</div>
  )
}

export default UserLogin