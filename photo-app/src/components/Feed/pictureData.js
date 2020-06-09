import image from "./lulea.png";
import React from "react";

const FeedImage = () => { 
  pictureData.map((picture, index) => (
    <ImageCard>
    <img 
    key={index} 
    src={picture.img} 
    title={picture.title} 
    author={picture.author}
    />
    
    </ImageCard>
));

};

const pictureData = [
  {
    img: image,
    title: "Titel",
    author: "Anton",
    
  },
  {
    img: image,
    title: "Lulea",
    author: "Mattias",
    
  },
  {
    img: image,
    title: "Min stad",
    author: "Daniel",
    
  },
  {
    img: image,
    title: "Ketchup?",
    author: "Agust",
    
  },
  {
    img: image,
    title: "Ketchup?",
    author: "Agust",
    
  },
  {
    img: image,
    title: "Ketchup?",
    author: "Agust",
    
  }
];

export default {
   pictureData,
   FeedImage
};
