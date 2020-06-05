import React, { useCallback } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import fire from "../../base.js";
import { Typography, Box, FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//logo
import logo from "../../engramLogo.png";
//backend
import { db } from "../../base";
import {
  ButtonStyled, StyledBoxContainer
} from "./LoginSignupStyles";
import TextField from '@material-ui/core/TextField';




const SignUp = ({ history }) => {

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



    <StyledBoxContainer>
      <img src={logo} />
      <form onSubmit={handleSignUp}>
        <FormControl>
          <TextField
            name="email"
            type="email"
            label="Enter a email"
          // onSubmit={handleLogin}
          />
          <br />
          <TextField
            name="username"
            type="username"
            label="Username"
          />
          <br />
          <TextField
            name="password"
            type="password"
            label="Choose a password"
            type="password"
          />
          <br />
          <ButtonStyled
            type="submit"
            size="large"
            component={Link} to="/login"
          >Back
     </ButtonStyled>
          <ButtonStyled
            type="submit"
            size="large"
          >Create Account
    </ButtonStyled>
        </FormControl>
      </form>
    </StyledBoxContainer>




    // <Box className={classes.signUpPage}>
    //   <img src={logo} />
    //   <form className={classes.formStyle} onSubmit={handleSignUp}>
    //     <FormControl className={classes.signUpBox}>
    //       <Typography>SIGN UP</Typography>
    //       <label className={classes.labelStyle}>
    //         <input
    //           className={classes.inputStyle}
    //           name="email"
    //           type="email"
    //           placeholder="email"
    //         />
    //       </label>
    //       <label className={classes.labelStyle}>
    //         <input
    //           className={classes.inputStyle}
    //           name="username"
    //           type="text"
    //           placeholder="username"
    //         />
    //       </label>
    //       <label>
    //         <input
    //           className={classes.inputStyle}
    //           name="password"
    //           type="password"
    //           placeholder="password"
    //         />
    //       </label>
    //       <Button type="submit">Signup</Button>
    //     </FormControl>
    //   </form>
    // </Box>
  );
};

export default withRouter(SignUp);
