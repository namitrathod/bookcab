/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import logo from '../assets/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useRef } from 'react';
import LocationSearchPanel from '../components/LocationSearchPanel';


function Home() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelopen, setpanelopen] = useState(false);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const submithandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelopen) {
      gsap.to(panelRef.current, { height: '70%' })
      gsap.to(panelCloseRef.current, { opacity: 1 })
    } else {
      gsap.to(panelRef.current, { height: '0%' })
      gsap.to(panelCloseRef.current, { opacity: 0 })
    }
  }, [panelopen])
  return (
    <div className='relative h-screen'>
      <img className='w-28 absolute left-5 top-5' src={logo} alt="Logo" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>
      <div className='absolute h-screen flex flex-col justify-end top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => { setpanelopen(false) }} className='absolute opacity-0 right-6 top-6 test-2xl'> <i className="ri-arrow-down-wide-line"></i>  </h5>
          <h4 className=' text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => { submithandler(e) }}>
            <div className="line absolute h-16 w-1 top-[32%] left-10 bg-[#10b461] rounded-full"></div>
            <input
              onClick={() => { setpanelopen(true) }}
              value={pickup}
              onChange={(e) => { setPickup(e.target.value) }}
              className='bg-[#eee] px-12 py-2 text-lg rounderd-lg w-full mt-2'
              type="text" placeholder='Add a pick up loaction' />
            <input
              onClick={() => { setpanelopen(true) }}
              value={destination}
              onChange={(e) => { setDestination(e.target.value) }}
              className='bg-[#eee] px-12 py-2 text-lg rounderd-lg w-full mt-2'
              type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  )
}

export default Home





