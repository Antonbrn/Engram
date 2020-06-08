import { Typography, Box, Container, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";

export const ButtonStyled = styled(Button)`
  font-family: "Viga";
  background: #bc5100;
  border: 1px solid #000;
  color: #f57f17;
  margin: 10px 0 0 5px;
  &:hover {
    background: #ffffff;
    color: black;
    transition: 0.7s ease;
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
`;
export const ContainerStyled = styled(Container)`
  // background: linear-gradient(160deg, #f57f17 50%, #fab30a);
  height: 100vh;
  padding-top: 100px;
`;
export const BoxContainer = styled(Box)`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 0;
`;
export const CardContainer = styled(Card)`
   max-width: 120px;
   border: solid 1px #bc5100;
    border-radius: 5px;

  /* VH = 200px */
  @media only screen and (min-width: 768px) {
    height: 21.34471718249733vh;
    width: 21.34471718249733vh;
  }
`;
export const TypographyStyled = styled(Typography)`
  text-align: center;
  /* max-width: 100px;
  color: black; */
  
  font-family: "Viga";
  /* @media only screen and (min-width: 768px) {
    justify-content: center;
  } */
`;

export const Title = styled(Typography)`
  font-family: "Viga";
  text-align: center;
`;

export const AlbumDiv = styled.div`
  margin: 10px;
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
`;

export default {
  ButtonStyled,
  ContainerStyled,
  BoxContainer,
  CardContainer,
  TypographyStyled,
  AlbumDiv,
};
