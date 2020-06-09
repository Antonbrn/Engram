import React from "react";
import { Container, Box, Typography, Button} from "@material-ui/core";
import { FeedBox, FeedContainer, ImageCard} from "./FeedStyle";
import pictureData from "./pictureData";
import FeedImage from "./pictureData";


export default function FeedList() {


  return (
    <FeedBox>
          <FeedContainer>
           <FeedImage>
             <ImageCard>
               
             </ImageCard>
           </FeedImage>
          </FeedContainer>
   </FeedBox>
   
  );
}


/* {pictureData.map((picture, index) => (          
             <Image>
               <img
            key={index}
            src={picture.img}
            alt={picture.title}
            width={350}
            height={350} />
            </Image>  
          ))}   
          <Typography variant="h5">{picture.title}</Typography>*/