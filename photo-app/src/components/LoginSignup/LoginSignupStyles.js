import React from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import styled from "styled-components";
import background from "./hejhej2.jpg";
import { Label } from "@material-ui/icons";

export const StyledBoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(160deg, #f57f17 40%, #fab30a);
  @media only screen and (min-width: 768px) {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
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
  }
`;
//#ff341a, #f7d10a
export const StyledForm = styled.div`
  padding: 15px;
  border-radius: 5px;
  border: 5px solid;
  border-image-source: linear-gradient(-30deg, #ff341a, #f7d10a);
  border-image-slice: 1;
  @media only screen and (min-width: 768px) {
    background-color: white;
  }
`;

export const FormControlStyled = styled(FormControl)`
  display: flex;
  justify-items: center;
`;

export const StyledTextField = styled(TextField)`
  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #ffb04c;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #bc5100;
  }
`;
