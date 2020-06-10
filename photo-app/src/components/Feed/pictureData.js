import image from "./lulea.png";
import React from "react";
import { ImageCard, ImageStyle, ImageInfo, Wrapper } from "./FeedStyle";

const pictureData = [
  {
    img: image,
    title: "Min fina vän",
    author: "Anton",
    description: "Jag och min vän"
  },
  {
    img: image,
    title: "Lulea",
    author: "Mattias",
    description: "Tog en öl på clarre"
  },
  {
    img: image,
    title: "Min stad",
    author: "Daniel",
    description: "Kodning är kul tycker jag"
  },
  {
    img: image,
    title: "Ketchup?",
    author: "Agust",
    description: "Spelade vollyboll idag"
  },
  {
    img: image,
    title: "Ketchup?",
    author: "Agust",
    description: "Detta är resultatet efter gårdagen"
  },
  {
    img: image,
    title: "Ketchup?",
    author: "Agust",
    description: "En dag på stranden"
  }
];

const FeedImage = (props) => { 
  return (
    
    <ImageCard>
      {
        pictureData.map((picture, index) => (
         <Wrapper>
          <ImageStyle
          key={index} 
          src={picture.img} 
          title={picture.title} 
          author={picture.author}
          description={picture.description}
          />
           
           <ImageInfo>
             <h2>{picture.title}</h2>
             <h5>Uploaded by: {picture.author}</h5>
             <p>{picture.description}</p>
            </ImageInfo>
         </Wrapper>
        ))
        
        
      }
     
    </ImageCard>
  )
};

export default FeedImage;

export { pictureData };
