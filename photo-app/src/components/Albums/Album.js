import React from "react";
import { Typography, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { storage } from "../../base";
import styled from 'styled-components';

const CardContainer = styled(Card)`
    /* Stylar korten i albums, behöver lägga till grid eller flex för att få dem att aligna bra! */
    /* display: flex;
    flex-flow: row wrap-reverse; */
    height: 200px;
    width: 200px;
  `;


const Album = ({ title, thumbnail, url }) => {
  return (
    <div>
    <CardContainer>
      <CardActionArea style={{width: "100%", height: "100%"}}>
      <img  style={{width: "100%", height: "100%"}}  src={url} />
      </CardActionArea>
      <CardContent>
        
      </CardContent> 
    
    </CardContainer>
      <Typography>{title}</Typography>
      </div>
  );
};

export default Album;
