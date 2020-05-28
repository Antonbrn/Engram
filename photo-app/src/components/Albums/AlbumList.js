import React, { useState, useContext } from "react";
import Album from "./Album";
import { AlbumContext } from "./AlbumContext";
import { ListItem } from "@material-ui/core";
import Box from "@material-ui/core/Card";
import styled from "styled-components";
import { db } from "../../base";

const StyledBox = styled.div`
  margin: 5px;
  display: flex;
  flex-flow: row wrap;
  text-align: center;
`;

const AlbumList = () => {
  const [albums, setAlbums] = useContext(AlbumContext);

  return (
    <StyledBox>
      {albums.map((album, key) => (
        <Box key={key}>
          <Album url={album.url} title={album.title} />
        </Box>
      ))}
    </StyledBox>
  );
};
export default AlbumList;
