import React from "react";
import { Typography } from "@material-ui/core";

const Album = ({ name, key }) => {
  return (
    <div>
      <Typography>{name}</Typography>
    </div>
  );
};

export default Album;
