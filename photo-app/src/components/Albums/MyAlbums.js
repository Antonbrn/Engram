import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import addAlbum from "../Assets/addAlbum.png";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { AuthContext } from "../../Auth";

import styled from "styled-components";
//Backend
import { db } from "../../base";
import {
  ContainerStyled,
  BoxContainer,
  CardContainer,
  TypographyStyled,
  ButtonStyled,
  AlbumDiv,
} from "./StylesAlbums";

const MyAlbums = (props) => {
  const [albums, setAlbums] = useState([]);
  const { currentUser } = useContext(AuthContext);

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
      <Typography variant="h5">Private Albums</Typography>
      <Box borderBottom={1} />
      {/* Box för display flex */}
      <BoxContainer>
        {/* Loopar ut alla albums i ett card med title */}
        {albums.map((album) => (
          <AlbumDiv key={album.id}>
          <CardContainer >

            <CardActionArea style={{ }}>
              <img style={{ width: "100%", height: "100%" }} src={album.url} />
            </CardActionArea>
          </CardContainer>
            <TypographyStyled>{album.title}</TypographyStyled>
          </AlbumDiv>
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
