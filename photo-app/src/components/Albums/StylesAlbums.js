import {
  Typography,
  Box,
  Container,
  Button,
  IconButton,
  Input,
  TextField
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";
import CardMedia from "@material-ui/core/CardMedia";

// export const ButtonStyled = styled(Button)`
//   font-family: "Viga";
//   background: #bc5100;
//   border: 1px solid #000;
//   color: #f57f17;
//   margin: 10px 0 0 5px;
//   &:hover {
//     background: #ffffff;
//     color: black;
//     transition: 0.7s ease;
//   }
//   @media only screen and (min-width: 768px) {
//     margin: 10px;
//   }
// `;

export const IconButtonStyled = styled(IconButton)`
  padding-top: 0px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonStyled = styled(Button)`
  font-family: "Viga";
  background: #bc5100;
  color: #ffff;
  border: solid 1px #bc5100;
  &:hover {
    color: #bc5100;
    border: solid 1px #bc5100;
    transition: 0.7s ease;
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
`;

export const ContainerStyled = styled(Container)`
  // background: linear-gradient(160deg, #f57f17 50%, #fab30a);
  /* height: 100vh; */
  padding-top: 100px;
`;
export const BoxContainer = styled(Box)`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 0;
`;
export const CardContainer = styled(Card)`
  width: 150px;
  border: solid 1px #bc5100;
  border-radius: 5px;
  max-height: 21.34471718249733vh;

  @media only screen and (min-width: 768px) {
    /* max-width: 200px; */
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
  text-align: left;
`;

export const AlbumDiv = styled.div`
  margin: 10px;

  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
`;
export const StyledCardMedia = styled(CardMedia)`
  height: 150px;

  @media only screen and (min-width: 768px) {
    height: 200px;
  }
`;


export const InputStyled = styled(Input)`

border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 1px; 


`;

export const TextFieldInputStyled = styled.label`
margin-top: 10px;
padding: 5px;
background-color: #bc5100;
color: #ffff;
border: solid 1px #bc5100;
  cursor: pointer;
  
  font-family: "Viga";
  display: inline-block;
  &:hover {
    background-color: white;
    color: #bc5100;
    border: solid 1px #bc5100;
    transition: 0.7s ease;
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
