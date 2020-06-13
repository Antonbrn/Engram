import React, { useState, useContext, useEffect } from "react";
import { FeedBox } from "./FeedStyle";
import { AuthContext } from "../../Auth";
import { db } from "../../base";
import { ImageStyle, Wrapper } from "./FeedStyle";

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
    <FeedBox>
      {photos.map((photo, index) => (
        <Wrapper key={index}>
          <ImageStyle src={photo.url} />
        </Wrapper>
      ))}
    </FeedBox>
  );
}
