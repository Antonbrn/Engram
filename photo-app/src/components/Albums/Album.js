import React from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  IconButton,
  Input,
  Tooltip
} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles({
  albumButton: {
    fontSize: 30
  }
});
//------
// tooltip fungerar inte annu, inte heller placeringen av iconerna
//------
const Album = () => {
  const classes = useStyles();
  return (
    <Box style={{ background: "white", height: "100vh", paddingTop: "100px" }}>
      <Typography
        variant="h1"
        style={{ textAlign: "center", fontSize: "50px" }}
      >
        album
      </Typography>

      <Container>
        <Tooltip title="Add Photo" placement="bottom">
          <IconButton className={classes.albumButton} aria-label="Add Photo">
            <AddPhotoAlternateIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add Friend">
          <IconButton className={classes.albumButton}>
            <PersonAddIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Photo">
          <IconButton className={classes.albumButton}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Container>
      <Box border={1} />
    </Box>
  );
};
export default Album;
