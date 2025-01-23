import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"
// import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  // const { user } = useContext(UserContext);
  // console.log(token);

  useEffect(() => {
    if (!token) {
      // return <Navigate to="/user-login" replace />;
      return navigate('/user-login');
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.status === 200) {
        // not good practice 
        if (!response.data.user) {
          navigate('/driver-login');
        }
        // if (response.data.driver) {
        //   navigate('/driver-home');
        // }
        setUser(response.data.user);
        setIsLoading(false);
      }
    })
      .catch(error => {
        console.log(error);
        localStorage.removeItem('token');
        navigate('/user-login');
      })
  }, [token, navigate, setUser])


  if (isLoading) {
    return (<div> Loading...</div>)
  }

  return (
    <>{children}</>
  )
}
UserProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProtectedWrapper