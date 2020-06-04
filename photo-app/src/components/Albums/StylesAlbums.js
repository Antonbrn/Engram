import { Typography, Box, Container, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";


export const ButtonStyled = styled(Button)`
  background: #0e973c;
  color: #ffff;
  margin-top: 10px;
  &:hover {
    background: #54c969;
    color: black;
    transition: 0.7s ease;
  }
`;
export const ContainerStyled = styled(Container)`
  background: #f57f17;
  height: 100vh;
  padding-top: 100px;
`;
export const BoxContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;
export const CardContainer = styled(Card)`
  height: 100px;
  width: 100px;
  margin: 5px;
  @media only screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
    margin: 20px;
  }
`;
export const TypographyStyled = styled(Typography)`
text-align: center;
justify-content: center;
color: white;
background: #0e973c;
height: 20%;
@media only screen and (min-width: 768px) {
  padding: 5px;
}
`;
 
export default {ButtonStyled, ContainerStyled, BoxContainer, CardContainer, TypographyStyled};