import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  IconButton,
  Input
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
//backend
import { db } from "../../base";
import { storage } from "../../base";
import { AuthContext } from "../../Auth";
import {
  ContainerStyled,
  ButtonStyled,
  InputStyled,
  TextFieldInputStyled,
  ContainerStyledCreateAlbum,
  TypographyStyled,
  BoxBorder,
  HideButton,
  IconButtonStyled
} from "./StylesAlbums";

const CreateAlbums = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  //function for getting the img file
  const getThumbnailFile = e => {
    if (e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const addAlbum = e => {
    e.preventDefault();

    //Upload the imagefile to firebase storage
    const uploadTask = storage.ref(`images/${thumbnail.name}`).put(thumbnail);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(thumbnail.name)
          .getDownloadURL()
          .then(url => {
            //add url and title to the database, Albums collection
            db.collection("albums").add({
              url: url,
              title: title,
              userId: currentUser.id,
              invited: ""
            });
            setUrl(url);
          });
      }
    );
  };

  return (
    <ContainerStyled>
      <IconButtonStyled
        component={Link}
        to="/myalbums"
        style={{ float: "left" }}
      >
        <ArrowBackIcon style={{ color: "#bc5100" }} />
      </IconButtonStyled>

      <ContainerStyledCreateAlbum>
        <BoxBorder>
          <TypographyStyled variant="h4">Create Album</TypographyStyled>
          <TextField
            error={false}
            required
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <TextFieldInputStyled>
            <InputStyled type="file" onChange={getThumbnailFile} />
            Add Thumbnail
          </TextFieldInputStyled>
          <img style={{ maxWidth: "250px", maxHeight: "250px" }} src={url} />

          <ButtonStyled
            variant="outlined"
            onClick={addAlbum}
            style={{ margin: 20 }}
          >
            <HideButton
              component={Link}
              to="/myalbums"
              style={{ color: "white" }}
            >
              Create Album
            </HideButton>
          </ButtonStyled>
        </BoxBorder>
      </ContainerStyledCreateAlbum>
    </ContainerStyled>
  );
};

export default CreateAlbums;
