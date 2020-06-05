import { Typography, Box, Container, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";









export const StyledBoxContainer = styled(Box)`
 display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    background-color: #f57f17;

`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  background: #0e973c;
  color: #ffff;
  margin-top: 15px;
  &:hover {
    background: #54c969;
    color: black;
    transition: 0.7s ease;
  }
  @media only screen and (min-width: 768px) {
    
  }
`;