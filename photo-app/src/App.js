import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginSignup/Login";
import SignUp from "./components/LoginSignup/SignUp";
//Cssbaseline for removing the default margin, padding
import CssBaseline from "@material-ui/core/CssBaseline";
//Authdata context
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";



function App() {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        
        <PrivateRoute path="/" component={Layout} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        
      </AuthProvider>
    </Router>
  );
}

export default App;
