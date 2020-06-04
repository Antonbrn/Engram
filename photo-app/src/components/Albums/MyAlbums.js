import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import addAlbum from "../Assets/addAlbum.png";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import styled from "styled-components";
//Backend
import { db } from "../../base";

const ButtonStyled = styled(Button)`
  background: #0e973c;
  color: #ffff;
  margin-top: 10px;
  &:hover {
    background: #54c969;
    color: black;
    transition: 0.7s ease;
  }
`;
const ContainerStyled = styled(Container)`
  background: #f57f17;
  height: 100vh;
`;
const BoxContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;
const CardContainer = styled(Card)`
  height: 100px;
  width: 100px;
  margin: 5px;
  @media only screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
    margin: 20px;
  }
`;
const TypographyStyled = styled(Typography)`
text-align: center;
justify-content: center;
color: white;
background: #0e973c;
height: 20%;
@media only screen and (min-width: 768px) {
  padding: 5px;
}
`;

const useAlbums = () => {
  const [albums, setAlbums] = useState([]);

  //Tar ner bilder från databasen
  useEffect(() => {
    db.collection("albums").onSnapshot((snapshot) => {
      const newAlbums = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlbums(newAlbums);
    });
  }, []);
  //.where("userId", "==", u.userId)

  return albums;
};

const MyAlbums = (props) => {
  const albums = useAlbums();

  return (
    <ContainerStyled>
      <Typography variant="h5">Private Albums</Typography>
      <Box borderBottom={1} />
      {/* Box för display flex */}
      <BoxContainer>
        {/* Loopar ut alla albums i ett card med title */}
        {albums.map((album) => (
          <CardContainer key={album.id}>
            <CardActionArea style={{ width: "100%", height: "100%" }}>
              <img style={{ width: "100%", height: "80%" }} src={album.url} />
              <TypographyStyled>{album.title}</TypographyStyled>
            </CardActionArea>
          </CardContainer>
        ))}
      </BoxContainer>

      <ButtonStyled variant="outlined" component={Link} to="/createalbums">
        Create album
      </ButtonStyled>

      <Typography variant="h5">Shared Albums</Typography>
      <Box borderBottom={1} />
    </ContainerStyled>
  );
};

export default MyAlbums;
