import React, { useState, useContext } from "react";
import Album from "./Album";
import { AlbumContext } from "./AlbumContext";
import { ListItem } from "@material-ui/core";
import Box from "@material-ui/core/Card";
import styled from "styled-components";


const StyledBox = styled.div`
  margin: 5px;
  display:flex;
  flex-flow: row wrap;
  text-align: center;

`;
const StyledContainer = styled.div`
  margin: 10px;
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
    </StyledBox>
  );
};

export default AlbumList;
