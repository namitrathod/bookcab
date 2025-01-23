
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Add prop-types for children
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;

