import React, { useEffect, useState } from "react";
import fire from "./base.js";
import { db } from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged(setCurrentUser);
    fire.auth().onAuthStateChanged((user) => {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          const userData = doc.data();
          userData.id = user.uid;
          setCurrentUser(userData);
        });
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
