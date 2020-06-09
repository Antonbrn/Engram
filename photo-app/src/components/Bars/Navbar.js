import React, { useState, useContext } from "react";
import RightMenuSlider from "@material-ui/core/Drawer";
import {
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  List,
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
import BottomBar from "./BottomBar";
import { useMediaQuery } from "@material-ui/core";
import {
  BoxSlider,
  StyledAppbar,
  StyledSettingsIcon,
  LoggedUser,
  StyledDiv,
} from "./NavbarStyles";
import { Link } from "react-router-dom";

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
  const isActive = useMediaQuery("(min-width: 768px)");
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

  //Function for the slideList
  const slideList = (slider) => (
    <BoxSlider>
      <StyledDiv>
        <IconButton onClick={toggleSlider(slider, false)}>
          <ArrowBack />
        </IconButton>
        <LoggedUser>{`${currentUser.username}`}</LoggedUser>
      </StyledDiv>

      <List>
        {menuLinks.map((Link, key) => (
          <ListItem button key={key}>
            <ListItemText
              style={{
                color: "black",
                textAlign: "center",
              }}
              primary={Link.listText}
            />
          </ListItem>
        ))}

        <button onClick={() => fire.auth().signOut()}>Log out</button>
      </List>
    </BoxSlider>
  );

  return (
    <>
      <StyledAppbar position="static">
        <Toolbar>
            <img src={logo}
              style={{ marginRight: "auto", maxWidth: 180 }} />
          {isActive && <BottomBar
          />}
          <IconButton onClick={toggleSlider("right", true)}>
            <StyledSettingsIcon />
          </IconButton>
          <RightMenuSlider
            anchor="right"
            open={state.right}
            onClose={toggleSlider("right", false)}
          >
            {slideList("right")}
          </RightMenuSlider>
        </Toolbar>
      </StyledAppbar>
    </>
  );
};

export default Navbar;
