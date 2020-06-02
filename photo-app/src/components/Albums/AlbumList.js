import React, { useEffect, useContext } from "react";
import Album from "./Album";
import { AlbumContext } from "./AlbumContext";
import styled from "styled-components";
import addAlbum from "../Assets/addAlbum.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const StyledBox = styled.div`
  margin: 0 10px 0 10px;
  display: flex;

  flex-flow: row wrap;
  text-align: center;
`;
const StyledContainer = styled.div`
  margin: 5px;
`;

const AlbumList = () => {
  const [albums, setAlbums] = useContext(AlbumContext);
  return (
    <StyledBox>
      {albums.map((album, key) => (
        <StyledContainer key={key}>
          <Album
            thumbnail={album.thumbnail}
            url={album.url}
            title={album.title}
          />
        </StyledContainer>
      ))}
      <Button
        // className={classes.createAlbumBtn}
        to="/createalbums"
        component={Link}
      >
        <img src={addAlbum}></img>
      </Button>
    </StyledBox>
  );
};
export default AlbumList;
