import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { AuthContext } from "../../Auth";
import { FormControl } from "@material-ui/core";
//engram logo
import logo from "../../engramLogo.png";
//backend
import fire from "../../base";
import {
  ButtonStyled, StyledBoxContainer, StyledForm
} from "./LoginSignupStyles";
import TextField from '@material-ui/core/TextField';
var bg=require('../LoginSignup/hejhej2.jpg');


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
      <StyledBoxContainer className='background-image' style ={ { backgroundImage: "url("+bg+")" } }>
        <StyledForm>
        <img src={logo} />
        <form onSubmit={handleLogin}>
          <FormControl>
            <TextField

            style={{color: 'black'}}
            name="email"
              label="Username/Email"
              hintText="Enter Your Username/Email"
              color="secondary"
              floatingLabelText="Email/Username"
              onSubmit={handleLogin}
            />
            <br />
            <TextField
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
          </FormControl>
        </form>
        </StyledForm>
      </StyledBoxContainer>
  );
};

export default withRouter(Login);
