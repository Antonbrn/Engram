import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CreateAlbums from "./CreateAlbums";
import AlbumList from "./AlbumList";
import styled from "styled-components";

const useStyles = makeStyles({
  createAlbumBtn: {
    background: "#0e973c",
    color: "#FFFF",
    marginTop: "10px",
    '&:hover':  {
      background: "#54c969",
      color: "black",
      transition: ".7s ease"
    }
  },
  flexContainer: {
    background: "white",
    height: "78vh",
  },
});



const MyAlbums = () => {
  const classes = useStyles();

  return (
    <Container className={classes.flexContainer}>
      <Typography variant="h5">Private Albums</Typography>
      <Box borderBottom={1} />
      <AlbumList />

      <Typography variant="h5">Shared Albums</Typography>
      <Box borderBottom={1} />

      <Button
        variant="contained"
        size="large"
        className={classes.createAlbumBtn}
        to="/createalbums"
        component={Link}
      >
        + Create Album
      </Button>
    </Container>
  );
};

export default MyAlbums;
