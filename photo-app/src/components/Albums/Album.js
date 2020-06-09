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
import {
  ContainerStyled,
  BoxContainer,
  CardContainer,
  TypographyStyled,
  ButtonStyled,
  AlbumDiv,
  Title,
  IconButtonStyled,
  StyledCardMedia,
  TitleDiv
} from "./StylesAlbums";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
//CONTEXT
import { AuthContext } from "../../Auth";

//BACKEND
import { db } from "../../base";
import { storage } from "../../base";
import { nominalTypeHack } from "prop-types";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles({
  albumButton: {
    fontSize: 30,
    display: "flex",
    padding: 0,
    alignItems: "flex-end"
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
    <>
      <ContainerStyled maxWidth="md">
        <TitleDiv>
          <Title variant="h5">Fridas midsommarfest</Title>
          <div className={classes.albumButton}>
            <Tooltip title="Add Photo" placement="bottom">
              <IconButtonStyled
                type="file"
                onChange={getPhotoFile}
                aria-label="Add Photo"
                onClick={addPhotos}
              >
                <AddPhotoAlternateIcon />
              </IconButtonStyled>
            </Tooltip>
            <Tooltip title="Add Friend">
              <IconButtonStyled>
                <PersonAddIcon />
              </IconButtonStyled>
            </Tooltip>
            <Tooltip title="Delete Photo">
              <IconButtonStyled>
                <DeleteIcon />
              </IconButtonStyled>
            </Tooltip>
          </div>
        </TitleDiv>
        <Box borderBottom={1} />
      </ContainerStyled>
      <ContainerStyled>
        {/* Box för display flex */}
        <BoxContainer></BoxContainer>
      </ContainerStyled>
    </>
  );
};
export default Album;
