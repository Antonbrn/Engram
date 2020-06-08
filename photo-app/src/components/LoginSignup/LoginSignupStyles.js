import { Typography, Box, Container, Button, FormControl } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";
var bg=require('../LoginSignup/hejhej.jpg');









export const StyledBoxContainer = styled(Box)`
 display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: 100% 100%;

`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  background: #bc5100;
  color: #ffff;
  margin-top: 15px;
  border: solid 1px #bc5100;
  &:hover {
    color: #bc5100;
    border: solid 1px #bc5100;
    transition: 0.7s ease;
  },

  @media only screen and (min-width: 768px) {
    
  }

`;

export const StyledForm = styled.div`
border-radius: 5px;
border: solid 5px #bc5100;
padding: 5px; 
padding-top: 0px; margin-top: 200px;
background-color: white;


`;


export const FormControlStyled = styled(FormControl)`
    color: #bc5100;
`;