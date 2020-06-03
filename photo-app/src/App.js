import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Bars/Navbar";
import BottomBar from "./components/Bars/BottomBar";
import { useMediaQuery } from "@material-ui/core";
import { ThemeProvider }  from '@material-ui/core/styles';
import theme from "./components/theme";


function App() {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
        <PrivateRoute path="/" component={Layout} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
