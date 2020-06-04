import React, { useState } from "react";
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
//backend
import { db } from "../../base";
import { storage } from "../../base";

const CreateAlbums = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  //function for getting the img file
  const getThumbnailFile = (e) => {
    if (e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const addAlbum = (e) => {
    e.preventDefault();

    //Upload the imagefile to firebase storage
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
            //add url and title to the database, Albums collection
            db.collection("albums")
              .add({
                url: url,
                title: title,
              })
              .then(() => {
                setTitle("");
                setUrl("");
              });
            setUrl(url);
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography variant="h5">Thumbnail</Typography>
        <Box>
          <Input type="file" onChange={getThumbnailFile} />
          <Box>
            <img style={{ maxWidth: "250px", maxHeight: "250px" }} src={url} />
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
