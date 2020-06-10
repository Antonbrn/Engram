import React from "react";
import Navbar from "./Bars/Navbar";
import BottomBar from "./Bars/BottomBar";
import Notifications from "./Notifications/Notifications";
import MyAlbums from "./Albums/MyAlbums";
import CreateAlbums from "./Albums/CreateAlbums";
import Feed from "./Feed/Feed";
import { Route } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import Album from "./Albums/Album";
import ProfilePage from "./ProfilePage/ProfilePage";

const Layout = () => {
  const isActive = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Feed} />
      <Route path="/myalbums" component={MyAlbums} />
      <Route path="/createalbums" component={CreateAlbums} />
      <Route path="/profilepage" component={ProfilePage} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/album/:id" component={Album} />
      {isActive && <BottomBar />}
    </div>
  );
};

export default Layout;
