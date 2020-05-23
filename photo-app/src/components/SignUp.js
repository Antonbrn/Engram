import React, { useCallback } from "react";
import { withRouter } from "react-router";
import fire from "../base.js";
import { Typography, Box, FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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

const SignUp = ({ history }) => {
  const classes = useStyles();

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <Box className={classes.signUpPage}>
      <form onSubmit={handleSignUp}>
        <FormControl className={classes.signUpBox}>
          <Typography>Sign up</Typography>
          <label>
            Email
            <input name="email" type="email" placeholder="email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="password" />
          </label>
          <Button type="submit">Signup</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default withRouter(SignUp);
