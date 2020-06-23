import React, { useCallback } from "react";
import { withRouter, Link } from "react-router-dom";
import fire from "../../base.js";
//logo
import logo from "../../engramLogo.png";
//backend
import { db } from "../../base";
import {
  ButtonStyled,
  StyledBoxContainer,
  StyledForm,
  StyledTextField,
  FormControlStyled,
} from "./LoginSignupStyles";

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
            return db
              .collection("users")
              .doc(cred.user.uid)
              .set({
                username: username.value,
              })
              .then(() => {
                history.push("/");
              });
          });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <StyledBoxContainer>
      <StyledForm>
        <img src={logo} alt={"logo"} />
        <form onSubmit={handleSignUp}>
          <FormControlStyled>
            <StyledTextField
              name="email"
              type="email"
              label="Enter a email"
              // onSubmit={handleLogin}
            />
            <br />
            <StyledTextField name="username" type="username" label="Username" />
            <br />
            <StyledTextField
              name="password"
              type="password"
              label="Choose a password"
            />
            <br />
            <ButtonStyled type="submit" size="large">
              Create Account
            </ButtonStyled>
            <ButtonStyled
              type="submit"
              size="large"
              component={Link}
              to="/login"
            >
              Back
            </ButtonStyled>
          </FormControlStyled>
        </form>
      </StyledForm>
    </StyledBoxContainer>
  );
};

export default withRouter(SignUp);
