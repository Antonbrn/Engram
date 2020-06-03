import React, { useEffect, useState } from "react";
import fire from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  console.log(currentUser);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
