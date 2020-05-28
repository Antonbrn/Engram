import React, { createContext, useState } from "react";
import { db } from "../../base";
import { Typography } from "@material-ui/core";

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {
  const [albums, setAlbums] = useState([]);

  return (
    <AlbumContext.Provider value={[albums, setAlbums]}>
      {props.children}
    </AlbumContext.Provider>
  );
};
