import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  List,
  Box,
} from "@material-ui/core";
import logo from "../../engramLogo.png";
import fire from "../../base";

//Imported icons
import { ArrowBack } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";

import BottomBar from "./BottomBar";
import { useMediaQuery } from "@material-ui/core";

//CSS STYLES
const useStyles = makeStyles({
  menuSliderContainer: {
    width: 250,
    background: "lightgrey",
    height: "100%",
  },
  listItem: {
    color: "black",
  },
  navBar: {
    height: "12vh",

    background: "Orange",
  },
  menuIcon: {
    color: "#FFFFFF",
    fontSize: "30px",
  },
  logo: {
    maxWidth: 130,
    marginRight: "auto",
  },
});

//Navbarlinks Array
const menuLinks = [
  {
    listText: "Account",
  },
  {
    listText: "Albums",
  },
  {
    listText: "Notifications",
  },
  {
    listText: "Help",
  },
  {
    listText: "About",
  },
];

const Navbar = () => {
  const isActive = useMediaQuery("(min-width: 600px)");
  //Uses statehook for the slider
  const [state, setState] = useState({
    right: false,
  });

  //Toggler function for the slider
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  //saves the css into a classes variable
  const classes = useStyles();

  //Function for the slideList
  const slideList = (slider) => (
    <Box className={classes.menuSliderContainer} component="div">
      <IconButton onClick={toggleSlider(slider, false)}>
        <ArrowBack />
      </IconButton>
      <List>
        {menuLinks.map((Link, key) => (
          <ListItem button key={key}>
            <ListItemText
              className={classes.listItem}
              primary={Link.listText}
            />
          </ListItem>
        ))}
        <button onClick={() => fire.auth().signOut()}>Log out</button>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar classes={classes.toolBar}>
          <img src={logo} className={classes.logo} />
          {isActive && <BottomBar />}
          <IconButton onClick={toggleSlider("right", true)}>
            <SettingsIcon className={classes.menuIcon} />
          </IconButton>
          <RightMenuSlider
            anchor="right"
            open={state.right}
            onClose={toggleSlider("right", false)}
          >
            {slideList("right")}
          </RightMenuSlider>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
