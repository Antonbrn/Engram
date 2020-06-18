import {
  Typography,
  Box,
  Container,
  Button,
  IconButton,
  Input,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";

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
  margin: 10px;
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
  font-family: "Viga";
  padding-top: 100px;
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
  left: 0;
  top: 0;
  height: auto;
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
  margin-top: 20px;
  padding: 5px;
  text-align: center;
  background-color: #bc5100;
  color: #ffff;
  border: solid 1px #bc5100;
  border-radius: 5px;
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

export const ContainerStyledCreateAlbum = styled(Container)`
  padding-top: 50px;
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

