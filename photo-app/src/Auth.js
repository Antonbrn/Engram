import React, { useEffect, useState } from "react";
import fire from "./base.js";
import { db } from "./base.js";
import CircularProgress from "@material-ui/core/CircularProgress";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
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

  if (pending) {
    return <CircularProgress />;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
