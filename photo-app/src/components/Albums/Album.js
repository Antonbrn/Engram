import React, { useState } from "react";
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
    fontSize: 30,
    justifyContent: "flex-end"
  },
  boxflex: {
    display: "flex"
  }
});

//------
// tooltip fungerar inte annu, inte heller placeringen av iconerna
//------

const Album = () => {
  //State for photos
  const [url, setUrl] = useState("");
  const [photo, setPhoto] = useState(null);

  //Get photofile
  const getPhotoFile = e => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  //Add photos function
  const addPhotos = e => {
    e.preventDefault();
  };

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box
        style={{ background: "white", height: "100vh", paddingTop: "100px" }}
      >
        <Box className={classes.boxflex}>
          <Typography
            variant="h1"
            style={{ textAlign: "center", fontSize: "50px" }}
          >
            albumName
          </Typography>

          <Tooltip title="Add Photo" placement="bottom">
            <IconButton
              className={classes.albumButton}
              aria-label="Add Photo"
              type="file"
            >
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
        </Box>
        <Box border={1} />

        <Input type="file" />
      </Box>
    </Container>
  );
};
export default Album;
