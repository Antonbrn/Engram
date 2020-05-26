import React, { useState, useContext } from "react";
import Album from "./Album";
import { AlbumContext } from "./AlbumContext";
import { ListItem } from "@material-ui/core";

const AlbumList = () => {
  const [albums, setAlbums] = useContext(AlbumContext);
  return (
    <div>
      {albums.map((album, key) => (
        <ListItem key={key}>
          <Album title={album.title} thumbnail={album.thumbnail} />
        </ListItem>
      ))}
    </div>
  );
};

export default AlbumList;
