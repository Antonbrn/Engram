import React, { useEffect, useState, useContext } from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import { AuthContext } from "../../Auth";
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
      <ContainerStyled style={{ paddingBottom: 100, paddingTop: 130 }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Title variant="h4" style={{}}>
            My Albums
          </Title>
          <ButtonStyled
            variant="outlined"
            component={Link}
            to="/createalbums"
            style={{ margin: 3, whiteSpace: "nowrap" }}
          >
            Create album
          </ButtonStyled>
        </Box>
        <Box borderBottom={1} />
        {/* Box för display flex */}
        <BoxContainer>
          {/* Loopar ut alla albums i ett card med title */}
          {albums.map((album) => (
            <AlbumDiv key={album.id} style={{ textAlign: "center" }}>
              <CardContainer>
                <CardActionArea
                  style={{
                    width: "100%",
                    height: "100%",
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
        </BoxContainer>

        <Title variant="h4">Shared Albums</Title>
        <Box borderBottom={1} />

        <BoxContainer>
          {/* Loopar ut alla albums i ett card med title */}

          {sharedAlbums.map((album) => (
            <AlbumDiv key={album.id} style={{ textAlign: "center" }}>
              <CardContainer>
                <CardActionArea
                  style={{
                    width: "100%",
                    height: "100%",
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
        </BoxContainer>
      </ContainerStyled>
    </>
  );
};

export default MyAlbums;
