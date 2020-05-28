import React from "react";
import Navbar from "./Bars/Navbar";
import BottomBar from "./Bars/BottomBar";
import Notifications from "./Notifications/Notifications";
import MyAlbums from "./Albums/MyAlbums";
import CreateAlbums from "./Albums/CreateAlbums";
import Feed from "./Feed/Feed";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";


const Layout = () => {

  const mediaQueried = useMediaQuery("(max-width: 600px)");

  return (
    
    <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route path="/myalbums" component={MyAlbums} />
        <Route path="/createalbums" component={CreateAlbums} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
      {mediaQueried && <BottomBar />}
    </BrowserRouter>
  );
};

export default Layout;
