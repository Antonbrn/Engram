import { Typography, Box, Container, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";

export const ButtonStyled = styled(Button)`
  background: #0e973c;
  color: #ffff;
  margin: 10px 0 0 5px;
  &:hover {
    background: #54c969;
    color: black;
    transition: 0.7s ease;
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
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
  color: white;
  background: #0e973c;
  margin-top: 5px;
  border-radius: 5px;
  @media only screen and (min-width: 768px) {
    padding: 5px;
    justify-content: center;
  }
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
  AlbumDiv
};
