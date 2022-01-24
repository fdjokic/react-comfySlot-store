import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout }}>
      {children}
    </UserContext.Provider>
  );
};
//  custom hook
export const useUserContext = () => {
  return useContext(UserContext);
};
