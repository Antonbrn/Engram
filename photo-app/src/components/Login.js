import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import { Box, Button, FormControl, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//engram logo
import logo from "../engramLogo.png";
//backend
import fire from "../base";

const useStyles = makeStyles({
  loginPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f57f17",
  },
  loginBox: {
    border: "solid black 2px",
  },
  formStyle: {
    textAlign: "center",
    backgroundColor: "#0e973c",
  },
  labelStyle: {
    padding: "10px 5px",
  },
  inputStyle: {
    backgroundColor: "#53c969",
    color: "#000",
    borderColor: "#89fd98",
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
      <form onSubmit={handleLogin} className={classes.formStyle}>
        <FormControl className={classes.loginBox}>
          <Typography>LOG IN</Typography>
          <label className={classes.labelStyle}>
            <input
              className={classes.inputStyle}
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>

          <label>
            <input
              className={classes.inputStyle}
              name="password"
              type="password"
              placeholder="Password"
            />
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
