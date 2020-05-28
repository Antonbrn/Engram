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
import { db } from "../../base";
import styled from "styled-components";

const CreateAlbums = () => {
  const [albums, setAlbums] = useContext(AlbumContext);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [url, setUrl] = useState("");

  // get albums collection from firebase
  //Denna fungerar ej än måste föröska få albums från firebase, den sätter upp och sparar dem dit iallafall
  //borde vara i t.ex. setUrl statet som man ska göra något med den,
  //just nu tar den från setUrl och renderar det istället för från databasen

  // fucntion for updating the title for album
  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  //function for getting the img file
  const updateThumbnail = (e) => {
    if (e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const addAlbum = (e) => {
    e.preventDefault();

    //Upload thumbnail image and add data to the albumcollection
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
            db.collection("albums").add({
              thumbnail: url,
              title: title,
            });
            setUrl(url);

            //Set the albumsstate
            setAlbums((prevAlbums) => [
              ...prevAlbums,
              { title: title, url: url },
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
          <Button variant="outlined" onClick={addAlbum}>
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
///test