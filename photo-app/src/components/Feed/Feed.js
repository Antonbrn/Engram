import React, { useState, useContext, useEffect } from "react";
import { FeedBox } from "./FeedStyle";
import { AuthContext } from "../../Auth";
import { db } from "../../base";
import { ImageStyle, Wrapper } from "./FeedStyle";

export default function FeedList() {
  const { currentUser } = useContext(AuthContext);
  const [photos, setPhotos] = useState([]);
  const [sharedAlbumsId, setSharedAlbumsId] = useState([]);
  const [sharedPhotos, setSharedPhotos] = useState([]);

  //Get Photos
  useEffect(() => {
    //get photos for currentUser
    db.collection("photos")
      .where("userId", "==", currentUser.id)
      .onSnapshot((snapshot) => {
        const newPhotos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPhotos(newPhotos);
      });

    //get photos for invitedUsers
    db.collection("albums")
      .where("invited", "array-contains", currentUser.id)
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          db.collection("photos")
            .where("albumId", "==", doc.id)
            .onSnapshot((snapshot) => {
              let newPhotos = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));

              setSharedPhotos((oldContent) => [...oldContent, ...newPhotos]);
            });
        });
      });
  }, []);

  return (
    <FeedBox>
      {photos.map((photo, index) => (
        <Wrapper key={index}>
          <ImageStyle src={photo.url} />
        </Wrapper>
      ))}
      {sharedPhotos.map((photo, index) => (
        <Wrapper key={index}>
          <ImageStyle src={photo.url} />
        </Wrapper>
      ))}
    </FeedBox>
  );
}
