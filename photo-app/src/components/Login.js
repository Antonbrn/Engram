import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import { Box, Button, FormControl, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../engramLogo.png";
import fire from "../base";
import styled from 'styled-components';


const useStyles = makeStyles({
  loginPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loginBox: {
    border: "solid black 2px",
  },
});



const Login = ({ history }) => {
  const classes = useStyles();
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Box className={classes.loginPage}>
      <img src={logo} />
      <form onSubmit={handleLogin}>
        <FormControl className={classes.loginBox}>
          <Typography>LOG IN</Typography>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <Button type="submit">Login</Button>
          <Button component={Link} to="/signup">
            Signup
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default withRouter(Login);
