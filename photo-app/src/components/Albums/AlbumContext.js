import React, { createContext, useState } from "react";

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {
  const [albums, setAlbums] = useState([
    {
      title: "",
      thumbnail: "",
      photos: "",
    },
  ]);
  return (
    <AlbumContext.Provider value={[albums, setAlbums]}>
      {props.children}
    </AlbumContext.Provider>
  );
};
