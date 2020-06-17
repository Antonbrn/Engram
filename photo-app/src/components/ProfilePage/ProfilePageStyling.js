import { Box, FormControl, TextField, Button, Avatar } from "@material-ui/core";

import styled from "styled-components";


export const AvatarStyled = styled(Avatar)`
  align-self: center;
  margin-top: 20px;
  color: white;
  background: #BA3009;
  width: 70px;
  height: 70px;
  
`;

export const LoggedUser = styled.h4`
  color: #f57f17;
`;

export const ButtonStyled = styled(Button)`
  align-self: center;
  background: #bc5100;
  color: #ffff;
  border: solid 1px #bc5100;
  margin: 5px;
  &:hover {
    color: #bc5100;
    border: solid 1px #bc5100;
    transition: 0.7s ease;
  }
`;


export const BoxContainer = styled(Box)`
    padding-Top: 70px;
    padding-bottom: 70px;
    text-align: center;
    display: flex;
    flex: wrap;
    justify-content: center;
    flex-direction: column;
    

    @media only screen and (min-width: 768px) {
      /* border: solid 3px #bc5100;
      border-radius: 5px; */

    }
`;

export const StyledTextField = styled(TextField)`
    width: 90%;
    border: 1px solid #ffb04c;
    margin: 15px;
    align-self: center;
    
    @media only screen and (min-width: 768px) {
    width: 30%;

    }
`;

export const FormControlStyled = styled(FormControl)`
  border: 1px solid #ffb04c;
  width: 90%;
`;