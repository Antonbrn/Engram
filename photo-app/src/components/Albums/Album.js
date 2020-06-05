import React from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  IconButton,
  Input
} from "@material-ui/core";
import { StyledTypo } from "./StylesAlbums";

const Album = () => {
  return (
    <Box style={{ background: "white", height: "100vh", paddingTop: "100px" }}>
      <StyledTypo variant="h1">album</StyledTypo>
      <Box border={1} />
    </Box>
  );
};
export default Album;
