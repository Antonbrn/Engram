import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { AlbumProvider } from "./components/Albums/AlbumContext";


function App() {

  

  return (
    
    <AlbumProvider>
      <div>
        <CssBaseline />
        
        <Layout />
        
      </div>
    </AlbumProvider>
  
    
//    <AuthProvider>
// <Router>
//   <Route path="/signup" component={SignUp} />
//   <Route path="/login" component={Login} />
//   <PrivateRoute exact path="/" component={Layout} />
// </Router>
// </AuthProvider>

  );
}




export default App;
