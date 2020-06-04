import React, { useState, useContext } from "react";
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
  Typography,
} from "@material-ui/core";
//Logo for navbar
import logo from "../../engramLogo.png";

//backend
import fire from "../../base";
//Authcontext, userdata
import { AuthContext } from "../../Auth";

//Imported icons
import { ArrowBack } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";

import BottomBar from "./BottomBar";
import { useMediaQuery } from "@material-ui/core";

//CSS STYLES
const useStyles = makeStyles({
  menuSliderContainer: {
    width: 250,
    background: "#bc5100",
    height: "100%",
    
  },
  listItem: {
    color: "black",
    textAlign: "center",
  },
  navBar: {
    height: "70px",
    position: "fixed",
    background: "#bc5100",
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

  //currentUser context
  const { currentUser } = useContext(AuthContext);

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
        <Typography
          className={classes.listItem}
          style={{ margin: "10px" }}
        >{`logged in as ${currentUser.username}`}</Typography>
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
