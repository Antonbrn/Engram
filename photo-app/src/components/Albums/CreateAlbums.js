import React, { useState, useContext } from "react";
import { AlbumContext } from "./AlbumContext";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  IconButton,
  Input,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { storage } from "../../base";
import styled from "styled-components";

const CreateAlbums = () => {
  const [albums, setAlbums] = useContext(AlbumContext);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [url, setUrl] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateThumbnail = (e) => {
    if (e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const createAlbum = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${thumbnail.name}`).put(thumbnail);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(thumbnail.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            setAlbums((prevAlbums) => [
              ...prevAlbums,
              { title: title, thumbnail: thumbnail, url: url },
            ]);
          });

      }
    );
    
  };
  return (
    <Container style={{ height: "78vh" }}>
      <Typography variant="h4">Create Album</Typography>
      <Box borderBottom={1} />
      <div>
        <TextField
          error={false}
          required
          label="Title"
          value={title}
          onChange={updateTitle}
        />
        <Typography variant="h5">Thumbnail</Typography>
        <Box>
          <Input type="file" onChange={updateThumbnail} />
          <Box>
            
            <img style={{width:"250px",height:"250px"}} src={url} />
          </Box>
        </Box>
        <Box>
          <Button variant="outlined" onClick={createAlbum}>
            Create Album
          </Button>
          <IconButton component={Link} to="/myalbums">
            <ArrowForward />
          </IconButton>
        </Box>
      </div>
    </Container>
  );
};

export default CreateAlbums;
