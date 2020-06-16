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
  const [sharedAlbums, setSharedAlbums] = useState([]);
  const { currentUser } = useContext(AuthContext);

  //Get Albums
  useEffect(() => {
    //get albums for currentuser
    db.collection("albums")
      .where("userId", "==", currentUser.id)
      .onSnapshot((snapshot) => {
        const newAlbums = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAlbums(newAlbums);
      });

    //get albums for invited user;
    db.collection("albums")
      .where("invited", "array-contains", currentUser.id)
      .onSnapshot((snapshot) => {
        const newAlbums = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSharedAlbums(newAlbums);
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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {albums.map((album) => (
              <AlbumDiv key={album.id} style={{ textAlign: "center" }}>
                <CardContainer>
                  <CardActionArea
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                    component={Link}
                    to={"/album/" + album.id + "/" + album.title}
                  >
                    <StyledCardMedia component="img" src={album.url} />
                  </CardActionArea>
                </CardContainer>
                <TypographyStyled
                  style={{
                    display: "inline-block",
                  }}
                >
                  {album.title}
                </TypographyStyled>
              </AlbumDiv>
            ))}
          </div>
        </BoxContainer>

        <ButtonStyled
          variant="outlined"
          component={Link}
          to="/createalbums"
          style={{ marginBottom: "50px" }}
        >
          Create album
        </ButtonStyled>
        <Title variant="h4">Shared Albums</Title>
        <Box borderBottom={1} />

        <BoxContainer>
          {/* Loopar ut alla albums i ett card med title */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {sharedAlbums.map((album) => (
              <AlbumDiv key={album.id} style={{ textAlign: "center" }}>
                <CardContainer>
                  <CardActionArea
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                    component={Link}
                    to={"/album/" + album.id + "/" + album.title}
                  >
                    <StyledCardMedia component="img" src={album.url} />
                  </CardActionArea>
                </CardContainer>
                <TypographyStyled
                  style={{
                    display: "inline-block",
                  }}
                >
                  {album.title}
                </TypographyStyled>
              </AlbumDiv>
            ))}
          </div>
        </BoxContainer>
      </ContainerStyled>
    </>
  );
};

export default MyAlbums;
