import React from "react";
import Navbar from "./Bars/Navbar";
import BottomBar from "./Bars/BottomBar";
import Notifications from "./Notifications/Notifications";
import MyAlbums from "./Albums/MyAlbums";
import CreateAlbums from "./Albums/CreateAlbums";
import Feed from "./Feed/Feed";
import { Route } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";



const Layout = () => {
  const isActive = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      
      <Navbar />
      <Route exact path="/" component={Feed} />
      <Route path="/myalbums" component={MyAlbums} />
      <Route path="/createalbums" component={CreateAlbums} />
      <Route path="/notifications" component={Notifications} />

      {isActive&& <BottomBar />}
      
    </div>
  );
};

export default Layout;
