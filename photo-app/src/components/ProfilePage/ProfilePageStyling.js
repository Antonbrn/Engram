import { Box, FormControl, TextField, Button, Avatar } from "@material-ui/core";
import styled from "styled-components";


export const AvatarStyled = styled(Avatar)`
`;

export const ButtonStyled = styled(Button)`
  width: 50%;
  background: #bc5100;
  color: #ffff;
  border: solid 1px #bc5100;
  &:hover {
    color: #bc5100;
    border: solid 1px #bc5100;
    transition: 0.7s ease;
  }
`;


export const BoxContainer = styled(Box)`
    background-color: white;
    padding-Top: 80px;
    text-align: center;
`;

export const StyledTextField = styled(TextField)`
    width: 90%;
    border: 1px solid #ffb04c;
    margin: 15px;

`;

export const FormControlStyled = styled(FormControl)`
  border: 1px solid #ffb04c;
  width: 90%;
`;