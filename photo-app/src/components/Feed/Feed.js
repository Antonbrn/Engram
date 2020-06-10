import React from "react";
import { FeedBox } from "./FeedStyle";
import FeedImage from "./pictureData";

export default function FeedList() {

  return (
    <FeedBox> 
      <FeedImage />
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