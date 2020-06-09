import React, { useEffect, useState, useContext } from "react";
import { Typography, Box, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import addAlbum from "../Assets/addAlbum.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import { AuthContext } from "../../Auth";

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
  const [currentAlbum, setCurrentAlbum] = useState("");

  //Get currentAlbum

  //Skicka AlbumId till currentAlbum och sedan till AlbumComponenten
  //så vi kan ladda upp foton
  const getCurrentAlbum = (albumId) => {
    console.log(albumId);
    setCurrentAlbum(albumId);
  };

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
                <CardActionArea
                  component={Link}
                  to="/album"
                  onClick={() => {
                    getCurrentAlbum(album.id);
                  }}
                >
                  <StyledCardMedia component="img" src={album.url} />
                </CardActionArea>
              </CardContainer>
              <TypographyStyled>{album.title}</TypographyStyled>
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
