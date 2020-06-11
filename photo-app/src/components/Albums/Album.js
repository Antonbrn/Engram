import React, { useState, useContext, useEffect } from "react";
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
  albumBackgroundDiv,
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
import CardActionArea from "@material-ui/core/CardActionArea";
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

const Album = props => {
  //Context for getting userid
  const { currentUser } = useContext(AuthContext);
  const albumId = props.match.params.id;
  //State for photos
  const [url, setUrl] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoFile, setPhotoFile] = useState([]);
  //Get photofile
  const getPhotoFile = e => {
    if (e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  //Add photos function
  const addPhotos = e => {
    e.preventDefault();
    //Upload photofile to firebase storage
    const uploadTask = storage.ref(`photos/${photoFile.name}`).put(photoFile);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("photos")
          .child(photoFile.name)
          .getDownloadURL()
          .then(url => {
            //Add url, userId to database
            db.collection("photos").add({
              url: url,
              userId: currentUser.id,
              albumId: albumId
            });
          });
        setUrl(url);
      }
    );
  };

  //Get Photos
  useEffect(() => {
    db.collection("photos")
      .where("albumId", "==", albumId)
      .onSnapshot(snapshot => {
        const newPhotos = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPhotos(newPhotos);
      });
  }, []);

  const classes = useStyles();
  console.log(photos);

  return (
    <div>
      <ContainerStyled maxWidth="md">
        <input type="file" onChange={getPhotoFile} />

        <TitleDiv>
          <Title variant="h5">Fridas midsommarfest</Title>
          <div className={classes.albumButton}>
            <Tooltip title="Add Photo" placement="bottom">
              <IconButtonStyled aria-label="Add Photo" onClick={addPhotos}>
                <AddPhotoAlternateIcon style={{ color: "#bc5100" }} />
              </IconButtonStyled>
            </Tooltip>
            <Tooltip title="Add Friend">
              <IconButtonStyled>
                <PersonAddIcon style={{ color: "#bc5100" }} />
              </IconButtonStyled>
            </Tooltip>
            <Tooltip title="Delete Photo">
              <IconButtonStyled>
                <DeleteIcon style={{ color: "#bc5100" }} />
              </IconButtonStyled>
            </Tooltip>
          </div>
        </TitleDiv>
        <Box borderBottom={1} />
      </ContainerStyled>
      <ContainerStyled style={{ paddingBottom: "60px" }}>
        {/* Box för display flex */}
        <BoxContainer style={{ justifyContent: "flex-start" }}>
          {photos.map((photo, index) => (
            <AlbumDiv key={index}>
              <CardContainer>
                <CardActionArea>
                  <StyledCardMedia component="img" src={photo.url} />
                </CardActionArea>
              </CardContainer>
            </AlbumDiv>
          ))}
        </BoxContainer>
      </ContainerStyled>
    </div>
  );
};
export default Album;
