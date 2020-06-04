import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, NotificationsActive, PhotoAlbum } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";

//const isActive = useMediaQuery("(min-width: 600px)");

const useStyles = makeStyles({
  bottomIcons: {
    color: "#bc5100",
    fontSize: "30px",
  },
});
const BottomNavigationActionStyled = styled(BottomNavigationAction)`
    
    &:visited {
      color: #bc5100;
  }
  font-size: 30px;

  @media only screen and (min-width: 600px) {
    color: #ffb04c;
      &:visited {
        color: #ffb04c;
  }
    
  }
`;

const BottomNavigationStyled = styled(BottomNavigation)`
background: #bc5100;
height: 70px;
padding-top: 10px;
@media only screen and (max-width: 599px) {
  background: #ffb04c;
  
  position: fixed;
  bottom: 0;
  width: 100%;
}

`;
const BottomBar = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState("feed");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigationStyled
      value={value}
      onChange={handleChange}
      
    >
      <BottomNavigationActionStyled
        component={Link}
        to="/myalbums"
        value="myalbums"
        icon={<PhotoAlbum />}
      />

      <BottomNavigationActionStyled
        component={Link}
        to="/"
        value="feed"
        icon={<Home />}
      />

      <BottomNavigationActionStyled
        component={Link}
        to="/notifications"
        value="notifications"
        icon={<NotificationsActive />}
      />
    </BottomNavigationStyled>
  );
};

export default BottomBar;
