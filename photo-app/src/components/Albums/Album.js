import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";

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

const Album = ({ title, url }) => {
  return (
    <div>
      <CardContainer>
        <CardActionArea style={{ width: "100%", height: "100%" }}>
          <img style={{ width: "100%", height: "100%" }} src={url} />
        </CardActionArea>
      </CardContainer>
      <Typography>{title}</Typography>
    </div>
  );
};

export default Album;
