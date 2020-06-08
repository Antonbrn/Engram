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
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 0;
`;
export const CardContainer = styled(Card)`
  height: 100px;
  width: 100px;

  @media only screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;
export const TypographyStyled = styled(Typography)`
  text-align: center;
  max-width: 100px;
  color: black;

  margin-top: 5px;
  border-radius: 5px;
  font-family: "Viga";
  @media only screen and (min-width: 768px) {
    padding: 5px;
    justify-content: center;
  }
`;

export const Title = styled(Typography)`
  font-family: "Viga";
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
