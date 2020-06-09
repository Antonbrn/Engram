import React, { useEffect, useState } from "react";
import fire from "./base.js";
import { db } from "./base.js";
import CircularProgress from "@material-ui/core/CircularProgress";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  //Pending fungerar men ej signOut, då den inte får någon currentUser antar jag.

  //const [pending, setPending] = useState(true);

  useEffect(() => {
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

  // if (pending) {
  //   return (
  //     <div
  //       style={{
  //         height: "100vh",
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <CircularProgress style={{ color: "#bc5100" }} size={150} />;
  //     </div>
  //   );
  // }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
