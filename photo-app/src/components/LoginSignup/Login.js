import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { AuthContext } from "../../Auth";
import { FormControl } from "@material-ui/core";
//engram logo
import logo from "../../engramLogo.png";
//backend
import fire from "../../base";
import {
  ButtonStyled, StyledBoxContainer, StyledForm, StyledTextField, label, FormControlStyled
} from "./LoginSignupStyles";

const Login = ({ history }) => {
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
      <StyledBoxContainer>
        <StyledForm>
        <img src={logo} />
        <form onSubmit={handleLogin}>
      
          <FormControlStyled>
            <StyledTextField
            
            name="email"
              label="Username/Email"
              hintText="Enter Your Username/Email"
              floatingLabelText="Email/Username"
              onSubmit={handleLogin}
            />
            <br />
            <StyledTextField
            name="password"
              label="Password"
              hintText="Enter your password"
              type="password"
              floatingLabelText="Password"
            />
            <ButtonStyled
              type="submit"
              size="large"
            >Login
         </ButtonStyled>
            <ButtonStyled
              size="large"
              component={Link} to="/signup"
            >Signup
        </ButtonStyled>
          </FormControlStyled>
        
        </form>
        </StyledForm>
      </StyledBoxContainer>
  );
};

export default withRouter(Login);
