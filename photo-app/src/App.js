import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { AlbumProvider } from"./components/Albums/AlbumContext";
import Navbar from "./components/Bars/Navbar";
import BottomBar from "./components/Bars/BottomBar";
import { useMediaQuery } from "@material-ui/core";


function App() {
  return (
    // <AlbumProvider>
    // <div>
    //   <CssBaseline />
    //     <Layout />
    // </div>
    //   </AlbumProvider>
    
<Router> 
  
       <AuthProvider>
      <PrivateRoute path="/" component={Layout} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </AuthProvider>
</Router>
  );
}

export default App;
