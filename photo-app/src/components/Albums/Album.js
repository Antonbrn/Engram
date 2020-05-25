import React from "react";
import { Typography, Box } from "@material-ui/core";

const Album = ({ title, thumbnail }) => {
  return (
    <div>
      <Typography>{title}</Typography>
      <img src={thumbnail} />
    </div>
  );
};

export default Album;
