import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import pictureData from "./pictureData";
import styled from "styled-components";

const ContainerStyled = styled(Container)`
  background: #f57f17;
  height: 100vh;
`;

const useStyles = makeStyles((theme) => ({
  feed: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: "#f57f17",
    height: "100vh",
  },
  gridList: {
    width: 400,
    height: "100%",
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function FeedList() {
  const classes = useStyles();

  return (
    <ContainerStyled>
      <div className={classes.feed}>
        <GridList cellHeight={200} spacing={5} className={classes.gridList}>
          {pictureData.map((picture, index) => (
            <GridListTile
              key={index}
              cols={picture.featured ? 2 : 1}
              rows={picture.featured ? 2 : 1}
            >
              <img src={picture.img} alt={picture.title} />
              <GridListTileBar
                title={picture.title}
                titlePosition="top"
                subtitle={<span>Uploaded by: {picture.author} </span>}
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </ContainerStyled>
  );
}
