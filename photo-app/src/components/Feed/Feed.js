import React, { useState, useContext, useEffect } from "react";
import { FeedBox } from "./FeedStyle";
import { AuthContext } from "../../Auth";
import { db } from "../../base";
import { ImageStyle, Wrapper } from "./FeedStyle";

export default function FeedList() {
  const { currentUser } = useContext(AuthContext);
  const [photos, setPhotos] = useState([]);
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

  let defaultFeed = (
    <>
      <h2 style={{ fontFamily: "viga" }}>
        Welcome to Engram, {currentUser.username}!
      </h2>
      <h3 style={{ fontFamily: "viga" }}>
        The private socialmedia app where you can share your moments in a safe
        way with the people you choose.
      </h3>
      <ol style={{ fontSize: 20, marginTop: 70 }}>
        <li>Create your first album</li>
        <li style={{ marginTop: 10 }}>Invite your friends</li>
        <li style={{ marginTop: 10 }}>Add photos</li>
        <li style={{ marginTop: 10 }}>Share your content</li>
      </ol>
    </>
  );

  if (photos.length > 0 || sharedPhotos.length > 0) {
    defaultFeed = "";
  }

  return (
    <FeedBox>
      {defaultFeed}
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
