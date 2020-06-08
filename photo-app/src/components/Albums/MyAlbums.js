import React, { useEffect, useState, useContext } from "react";
import { Typography, Box, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import addAlbum from "../Assets/addAlbum.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import { AuthContext } from "../../Auth";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";


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
} from "./StylesAlbums";

const MyAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [currentAlbum, setCurrentAlbum] = useState("");

  //Get currentAlbum
  const getCurrentAlbum = (e) => {
    e.preventDefault();
    db.collection("albums")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.id);
        });
      });
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
    <ContainerStyled>
      <Title variant="h4">Private Albums</Title>
      <Box borderBottom={1} />
      {/* Box för display flex */}
      <BoxContainer>
        {/* Loopar ut alla albums i ett card med title */}
        {albums.map((album) => (
          <AlbumDiv key={album.id}>
            <CardContainer>
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: 170 }}
                  src={album.url}
                />
              </CardActionArea>
            </CardContainer>
            <TypographyStyled>{album.title}</TypographyStyled>
          </AlbumDiv>
        ))}
      </BoxContainer>

      <ButtonStyled variant="outlined" component={Link} to="/createalbums">
        Create album
      </ButtonStyled>
      <ButtonStyled variant="outlined" component={Link} to="/album">
        To album
      </ButtonStyled>
      <Title variant="h4">Shared Albums</Title>
      <Box borderBottom={1} />
    </ContainerStyled>
  );
};

export default MyAlbums;
