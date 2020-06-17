import React from "react";
import { Home, NotificationsActive, PhotoAlbum, } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  BottomNavigationActionStyled,
  BottomNavigationStyled,
} from "./NavbarStyles";


//const isActive = useMediaQuery("(min-width: 600px)");

const BottomBar = () => {
  const [value, setValue] = React.useState("feed");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigationStyled value={value} onChange={handleChange}>
      <BottomNavigationActionStyled
        component={Link}
        to="/myalbums"
        value="myalbums"
        label="Albums"
        icon={<PhotoAlbum />}
      />
      
      <BottomNavigationActionStyled
        component={Link}
        to="/"
        value="feed"
        label="Home"
        id="goHome"
        icon={<Home />}
      />

      <BottomNavigationActionStyled
        component={Link}
        to="/notifications"
        value="notifications"
        label="Notifications"
        icon={<NotificationsActive />}
      />
    </BottomNavigationStyled>
  );
};

export default BottomBar;
