// import React from 'react'
import PropTypes from 'prop-types';
import { createContext, useState } from 'react'

export const UserDataContext =createContext();

const UserContext = ({children}) => {

    const [user, setuser] = useState({
        email:'',
        fullName:{
            firstname:'',
            lastname:''
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={[user,setuser]}>
        {children}
        </UserDataContext.Provider>
        </div>
  )
}
UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext