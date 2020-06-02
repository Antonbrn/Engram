import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CreateAlbums from "./CreateAlbums";
import AlbumList from "./AlbumList";
import { AlbumContext } from "./AlbumContext";
import { AuthContext } from "../../Auth";
import styled from "styled-components";
import { db } from "../../base";
import addAlbum from "../Assets/addAlbum.png";

const useStyles = makeStyles({
  createAlbumBtn: {
    background: "#0e973c",
    color: "#FFFF",
    marginTop: "10px",
    "&:hover": {
      background: "#54c969",
      color: "black",
      transition: ".7s ease",
    },
  },
  flexContainer: {
    background: "#f57f17",
    height: "78vh",
  },
});

const MyAlbums = (props) => {
  const classes = useStyles();
  const [albums, setAlbums] = useContext(AlbumContext);

  console.log("props");
  useEffect(() => {
    db.collection("albums")
      //.where("userId", "==", u.userId)
      .get()
      .then((snapshot) => {
        let a = [];

        snapshot.docs.forEach((doc) => {
          let { title, thumbnail } = doc.data();
          albums.push({
            title: title,
            url: thumbnail,
          });
        });

        //setAlbums(() => [...albums]);
      });
  });

  return (
    <Container className={classes.flexContainer}>
      <Typography variant="h5">Private Albums</Typography>
      <Box borderBottom={1} />

      <AlbumList />

      <Typography variant="h5">Shared Albums</Typography>
      <Box borderBottom={1} />
    </Container>
  );
};

export default MyAlbums;
