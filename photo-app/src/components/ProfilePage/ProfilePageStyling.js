import {
  Box,
  FormControl,
  TextField,
  Button,
  Avatar,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

export const AvatarStyled = styled(Avatar)`
  align-self: center;
  margin-top: 25px;
  height: 3.5rem;
  width: 3.5rem;
`;

export const LoggedUser = styled.h4`
  color: #bc5100;
  font-family: "Viga";
  font-size: 1.1rem;
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

export const EmailButton = styled(Button)`
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

export const BoxContainer = styled(Box)`
  padding-top: 70px;
  padding-bottom: 70px;
  text-align: center;
  display: flex;
  flex: wrap;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    // border: solid 3px #bc5100;
    // border-radius: 5px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 90%;
  border: 1px solid #ffb04c;
  margin: 15px;
  align-self: center;

  @media only screen and (min-width: 768px) {
    width: 30%;
  }
`;

export const FormControlStyled = styled(FormControl)`
  border: 1px solid #ffb04c;
  width: 90%;
`;

export const TypographyProfile = styled(Typography)`
  font-family: "viga";
  font-size: 1.1rem;
  text-align: center;
  white-space: nowrap;
  padding-left: ;
  line-height: 2;

  color: #f57f17;
`;
