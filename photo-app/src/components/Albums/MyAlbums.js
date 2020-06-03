import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CreateAlbums from "./CreateAlbums";
import { db } from "../../base";
import addAlbum from "../Assets/addAlbum.png";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";

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

const CardContainer = styled(Card)`
  /* Stylar korten i albums, behöver lägga till grid eller flex för att få dem att aligna bra! */
  /* display: flex;
    flex-flow: row wrap-reverse; */

  height: 70px;
  width: 70px;
  @media only screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

const useAlbums = () => {
  const [albums, setAlbums] = useState([]);

  //Tar ner bilder från databasen
  useEffect(() => {
    db.collection("albums").onSnapshot((snapshot) => {
      const newAlbums = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlbums(newAlbums);
    });
  }, []);

  return albums;
};

const MyAlbums = (props) => {
  const classes = useStyles();
  const albums = useAlbums();

  return (
    <Container className={classes.flexContainer}>
      <Typography variant="h5">Private Albums</Typography>
      <Box borderBottom={1} />

      {/* en tillfällig box för att displaya flex */}
      <Box style={{ display: "flex" }}>
        {/* Loopar ut alla albums i ett card med title */}
        {albums.map((album) => (
          <CardContainer style={{ margin: "20px" }} key={album.id}>
            <CardActionArea style={{ width: "100%", height: "100%" }}>
              <img style={{ width: "100%", height: "70%" }} src={album.url} />
              <Typography
                style={{ background: "blue", color: "white", height: "30%" }}
              >
                {album.title}
              </Typography>
            </CardActionArea>
          </CardContainer>
        ))}
      </Box>

      <Button variant="outlined" component={Link} to="/createalbums">
        Create album
      </Button>

      <Typography variant="h5">Shared Albums</Typography>
      <Box borderBottom={1} />
    </Container>
  );
};

export default MyAlbums;
