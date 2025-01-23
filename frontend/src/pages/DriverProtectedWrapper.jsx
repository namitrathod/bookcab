import DriverDataContext from '../context/DriverContext';
import { useNavigate } from "react-router-dom"
// import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useContext } from 'react'
import axios from 'axios'
// DriverDataContext

const DriverProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    // eslint-disable-next-line no-unused-vars
    const { driver, setDriver } = useContext(DriverDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    // const { user } = useContext(UserContext);
    // console.log(token);
    useEffect(() => {
        if (!token) {
            // return <Navigate to="/driver-login" replace />;
            return navigate('/driver-login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/drivers/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                // console.log('API response:', response.data);
                if (!response.data.driver) {
                    navigate('/driver-login');
                }
                setDriver(response.data.driver);
                // if (response.data.driver) {
                //     setDriver(response.data.driver);
                // } else {
                //     navigate('/driver-login');
                // }

                setIsLoading(false);
            }
        })
            .catch(error => {
                console.log(error);
                localStorage.removeItem('token');
                navigate('/driver-login');
            })
    }, [token, navigate, setDriver])  // done some change


    if (isLoading) {
        return (<div> Loading...</div>)
    }
    return (
        <>{children}</>
    )
}
DriverProtectedWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DriverProtectedWrapper