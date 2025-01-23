// import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const DriverLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/drivers/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/driver-login');
            }
        })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.status === 401) {
                    navigate('/driver-login');
                }
            });
    }, [navigate, token]);
    return (
        <div>DriverLogout</div>
    )
}

export default DriverLogout