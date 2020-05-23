import React, { useState, useContext } from "react";
import { AlbumContext } from "./AlbumContext";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

const CreateAlbums = () => {
  const [title, setTitle] = useState("");
  const [albums, setAlbums] = useContext(AlbumContext);

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const createAlbum = (e) => {
    e.preventDefault();
    setAlbums((prevAlbums) => [...prevAlbums, { title: title }]);
  };

  return (
    <Container style={{ height: "78vh" }}>
      <Typography variant="h4">Create Album</Typography>
      <Box borderBottom={1} />
      <form onSubmit={createAlbum}>
        <TextField
          error={false}
          required
          label="Title"
          value={title}
          onChange={updateTitle}
        />
        <Typography variant="h5">Thumbnail</Typography>
        <Box>
          <IconButton>
            <AddToPhotosIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box>
          <Button variant="outlined" type="submit">
            Create Album
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateAlbums;
