import React, { useState, useContext, useEffect } from "react";
import { FeedBox } from "./FeedStyle";
import { AuthContext } from "../../Auth";
import { db } from "../../base";
import FeedImage from "./pictureData";

export default function FeedList() {
  const { currentUser } = useContext(AuthContext);
  const [photos, setPhotos] = useState([]);

  //Get Photos
  useEffect(() => {
    db.collection("photos")
      .where("userId", "==", currentUser.id)
      .onSnapshot((snapshot) => {
        const newPhotos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPhotos(newPhotos);
      });
  }, []);
  console.log(photos);

  return (
    <FeedBox
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.url} />
        </div>
      ))}
    </FeedBox>
  );
}

//    <FeedImage />

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
