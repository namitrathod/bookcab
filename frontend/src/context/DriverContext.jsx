
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const DriverDataContext = createContext();

export function DriverContextProvider({ children }) {
  const [driver, setDriver] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const updateDriver = (driverdata) => {
  //   setDriver(driverdata);}
  // const value= {
  //   driver,
  //   setDriver,
  //   loading,
  //   setLoading,
  //   error,
  //   setError,
  //   updateDriver
  // };

  return (
    <DriverDataContext.Provider value={{ driver, setDriver }}>
      {children}
    </DriverDataContext.Provider>
  );
}

// Add prop-types for children
DriverContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DriverDataContext;

