import React, { useState, useContext } from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  IconButton,
  Input,
  Tooltip,
  Grid,
  Paper
} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { ContainerStyled } from "./StylesAlbums";
import { CardContainer } from "./StylesAlbums";
import pictureData from "../Feed/pictureData";

//CONTEXT
import { AuthContext } from "../../Auth";

//BACKEND
import { db } from "../../base";
import { storage } from "../../base";

const useStyles = makeStyles({
  albumButton: {
    fontSize: 30,
    justifyContent: "flex-end"
  },
  root: {
    paddingTop: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 500,
    height: 300
  }
});

const Album = () => {
  //Context for getting userid
  const { currentUser } = useContext(AuthContext);

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
    //Upload photofile to firebase storage
    const uploadTask = storage.ref(`photos/${photo.name}`).put(photo);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("photos")
          .child(photo.name)
          .getDownloadURL()
          .then(url => {
            //Add url, userId to database
            db.collection("photos").add({
              url: url,
              userId: currentUser.id,
              albumId: ""
            });
          });
        setUrl(url);
      }
    );
  };

  const classes = useStyles();

  return (
    <ContainerStyled maxWidth="md">
      <Box>
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
            onClick={addPhotos}
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
      <Input type="file" onChange={getPhotoFile} />
      <Box border={1} />
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={3}>
          {pictureData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={"https://picsum.photos/200"} alt={"hejsan"} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </ContainerStyled>
  );
};
export default Album;
