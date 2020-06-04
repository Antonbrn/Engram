import React, { useCallback } from "react";
import { withRouter } from "react-router";
import fire from "../base.js";
import { Typography, Box, FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//logo
import logo from "../engramLogo.png";
//backend
import { db } from "../base";

const useStyles = makeStyles({
  signUpPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f57f17",
  },
  signUpBox: {
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

const SignUp = ({ history }) => {
  const classes = useStyles();

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, username } = event.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((cred) => {
            return db.collection("users").doc(cred.user.uid).set({
              username: username.value,
            });
          });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <Box className={classes.signUpPage}>
      <img src={logo} />
      <form className={classes.formStyle} onSubmit={handleSignUp}>
        <FormControl className={classes.signUpBox}>
          <Typography>SIGN UP</Typography>
          <label className={classes.labelStyle}>
            <input
              className={classes.inputStyle}
              name="email"
              type="email"
              placeholder="email"
            />
          </label>
          <label className={classes.labelStyle}>
            <input
              className={classes.inputStyle}
              name="username"
              type="text"
              placeholder="username"
            />
          </label>
          <label>
            <input
              className={classes.inputStyle}
              name="password"
              type="password"
              placeholder="password"
            />
          </label>
          <Button type="submit">Signup</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default withRouter(SignUp);
