import React, { useEffect, useState, useContext } from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  IconButton,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import addAlbum from "../Assets/addAlbum.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import { AuthContext } from "../../Auth";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

//Backend
import { db } from "../../base";
import {
  ContainerStyled,
  BoxContainer,
  CardContainer,
  TypographyStyled,
  ButtonStyled,
  AlbumDiv,
  Title,
  StyledCardMedia,
} from "./StylesAlbums";

export const AlbumContext = React.createContext();

const MyAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const { currentUser } = useContext(AuthContext);

  //Get Albums
  useEffect(() => {
    db.collection("albums")
      .where("userId", "==", currentUser.id)
      .onSnapshot((snapshot) => {
        const newAlbums = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAlbums(newAlbums);
      });
  }, []);

  // var getId = db.collection("albums").doc().id;
  // console.log(getId);
  // //Delete Album
  // const deleteAlbum = (albumId) => {
  //   db.collection("albums")
  //     .where("albumId", "==", albumId)
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.forEach((doc) => {
  //         doc.ref.delete();
  //       });
  //     });
  // };

  //Delete Album
  // const deleteAlbum = (albumId) => {
  //   db.collection("albums")
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.forEach((doc) => {
  //         const docId = doc.id;
  //       });
  //     });

  //   db.collection("albums")
  //     .where(docId, "==", albumId)
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.forEach((doc) => {
  //         doc.ref.delete();
  //       });
  //     });
  // };

  return (
    <>
      <ContainerStyled>
        <Title variant="h4">Private Albums</Title>
        <Box borderBottom={1} />
        {/* Box för display flex */}
        <BoxContainer>
          {/* Loopar ut alla albums i ett card med title */}
          {albums.map((album) => (
            <AlbumDiv key={album.id}>
              <CardContainer>
                <CardActionArea component={Link} to={"/album/" + album.id}>
                  <StyledCardMedia component="img" src={album.url} />
                </CardActionArea>
              </CardContainer>
              <TypographyStyled>
                {album.title}
                <IconButton>
                  <HighlightOffIcon style={{ color: "red" }} />
                </IconButton>
              </TypographyStyled>
            </AlbumDiv>
          ))}
        </BoxContainer>

        <ButtonStyled
          variant="outlined"
          component={Link}
          to="/createalbums"
          style={{ marginBottom: "50px" }}
        >
          Create album
        </ButtonStyled>

        <Typography variant="h5">Shared Albums</Typography>
        <Box borderBottom={1} />
      </ContainerStyled>
    </>
  );
};

export default MyAlbums;
