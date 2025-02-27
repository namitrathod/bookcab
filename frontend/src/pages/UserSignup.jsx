/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../context/UserContext'
import logo from '../assets/logo.png'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userdata, setUserdata] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = { fullname: { firstname: firstName, lastname: lastName }, email: email, password: password }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token);
      navigate('/home')
    }
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setUserdata({ fullName: { firstName: firstName, lastName: lastName }, email: email, password });
    console.log(userdata)
  }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img src={logo} alt="Logo" className='w-28 mb-3' />

          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-3xl  font-medium mb-3'>What&apos;s your name</h3>
            <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <input
                required
                className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <h3 className='text-3xl font-medium mb-3'>What&apos;s your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />

            <h3 className='text-3xl font-medium mb-3'>Enter Password</h3>

            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required type="password"
              placeholder='password'
            />

            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-2xl placeholder:text-base'
            >Create account</button>

          </form>
          <p className='text-center text-lg'>Already have a account? <Link to='/user-login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div >
  )
}

export default UserSignup