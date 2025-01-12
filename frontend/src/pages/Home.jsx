// import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
return (  
<div className="flex flex-col justify-center items-center h-screen">
    <div className="flex-grow flex flex-col justify-center items-center w-full bg-black">
        <h2 className="text-white text-7xl font-bold">CabGO</h2>
    </div>
    <div className="bg-white p-4 text-black w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl">Get started with your first Ride</h2>
        <Link to={"/user-login"} className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 text-2xl">Continue</Link>
    </div>
</div>  
)
}

export default Home