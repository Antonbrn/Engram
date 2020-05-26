import React from "react";
import { Typography, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { storage } from "../../base";

const Album = ({ title, thumbnail, url }) => {
  return (
    <Card>
      {console.log({ title, thumbnail, url })}
      <img src={url} />
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Album;
