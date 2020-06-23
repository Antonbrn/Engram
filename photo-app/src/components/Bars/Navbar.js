import React from "react";
import { Toolbar, CardActionArea } from "@material-ui/core";
//Logo for navbar
import logo from "../../engramLogo.png";

//Imported icons
import BottomBar from "./BottomBar";
import { useMediaQuery } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import { StyledAppbar, AvatarStyledBar } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isActive = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <StyledAppbar position="static">
        <Toolbar>
          <CardActionArea
            style={{ marginRight: "auto", maxWidth: 180 }}
            onClick={() => document.querySelector("#goHome").click()}
          >
            <img
              src={logo}
              alt={"logo"}
              style={{ marginRight: "auto", maxWidth: 180 }}
            />
          </CardActionArea>
          {isActive && <BottomBar />}

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
