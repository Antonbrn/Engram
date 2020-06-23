import React, { useState, useContext } from "react";
import RightMenuSlider from "@material-ui/core/Drawer";
import {
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  List,
  CardActionArea,
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
import { useMediaQuery, Avatar } from "@material-ui/core";
import FaceIcon from '@material-ui/icons/Face';
import {
  BoxSlider,
  StyledAppbar,
  LoggedUser,
  StyledDiv,
  AvatarStyledBar,
  
} from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isActive = useMediaQuery("(min-width: 768px)");
  //Uses statehook for the slider
  const [state, setState] = useState({
    right: false,
  });

  //currentUser context
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <StyledAppbar position="static">
        <Toolbar>
        <CardActionArea style={{marginRight: "auto", maxWidth: 180}} onClick={ () => document.querySelector("#goHome").click() }>
            <img src={logo} 
              style={{ marginRight: "auto", maxWidth: 180 }} 
               />
               </CardActionArea>
          {isActive && <BottomBar
          />}
         
          <AvatarStyledBar
          
        component={Link}
        to="/profilepage"
        value="profile"
        icon={<FaceIcon style={{fontSize: "4vh",}}/>}
      />
         
        </Toolbar>
      </StyledAppbar>
    </>
  );
};

export default Navbar;
