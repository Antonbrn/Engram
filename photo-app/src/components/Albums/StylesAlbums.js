import {
  Typography,
  Box,
  Container,
  Button,
  IconButton,
  Input,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";

export const IconButtonStyled = styled(IconButton)`
  padding-top: 0px;
  padding-bottom: 0px;
  display: inline-block;
`;

export const ArrowButtonStyled = styled(IconButton)`
  padding: 0;
  display: inline-block;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonStyled = styled(Button)`
  font-family: "Viga";
  background: linear-gradient(180deg, #f6ecda 50%, #f5d5a6);
  color: #bc5100;
  border: solid 2px #bc5100;
  margin: 10px;
  &:hover {
    color: #bc5100;

    transition: 0.7s ease;
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
`;

export const ContainerStyled = styled(Container)`
  font-family: "Viga";
  padding-top: 80px;
`;
export const BoxContainer = styled(Box)`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-bottom: 30px;
  padding: 10px 0 10px 0;
  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const CardContainer = styled(Card)`
  width: 130px;
  height: 130px;
  border: solid 1px #bc5100;
  border-radius: 5px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
export const TypographyStyled = styled(Typography)`
  font-family: "Viga";
`;

export const Title = styled(Typography)`
  font-family: "Viga";
  text-align: left;
`;

export const AlbumDiv = styled.div`
  margin: 3px;

  @media only screen and (min-width: 768px) {
    margin: 2px;
  }
`;
export const StyledCardMedia = styled.img`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;

  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @media only screen and (min-width: 768px) {
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
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  font-family: "Viga";
  background: linear-gradient(180deg, #f6ecda 50%, #f5d5a6);
  color: #bc5100;
  border: solid 2px #bc5100;
  margin: 10px;
  cursor: pointer;
  &:hover {
    transition: 0.7s ease;
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
`;

export const ContainerStyledCreateAlbum = styled(Container)`
  //padding-top: 50px;
  display: flex;
  flex-flow: column wrap;
  font-family: "Viga";
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;

export const StyledIconButton = styled(IconButton)`
  font-family: "Viga";
  background: #bc5100;
  color: #ffff;
  border: solid 1px #bc5100;
  &:hover {
    color: #bc5100;
    border: solid 1px #bc5100;
    transition: 0.7s ease;
  }
`;

export const BoxBorder = styled(Box)`
  padding: 20px;
  border: solid 2px #bc5100;
  display: flex;
  justify-content: top;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    padding: 150px;
  }
`;

export const HideButton = styled(Button)`
  font-family: "Viga";
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  &:hover {
    background-color: Transparent;
    color: #bc5100;
    border: none;
    transition: 0.7s ease;
  }
`;

export const ModalDiv = styled.div`
  background: white;
  border: 6px solid #bc5100;

  height: 30vh;
  width: 60vw;
  text-align: center;
  font-family: "Viga";
`;

export const ImgModal = styled.img`
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 768px) {
  }
`;

export const BoxStyled = styled(Box)`
  background: linear-gradient(90deg, #bc5100, #ffb04c);
  width: 60%;
  max-height: 90vh;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
  @media only screen and (min-width: 1024px) {
    width: 30%;
  }
`;

export const DeletePhotoButton = styled(IconButton)`
  // color: transparent;
  // &:hover {
  //   color: red;
  //   border: 2px solid black;
  // }
`;
export const StyledCardContent = styled(CardContent)`
  background: linear-gradient(-360deg, #daecf0 20%, #fff);
`;
