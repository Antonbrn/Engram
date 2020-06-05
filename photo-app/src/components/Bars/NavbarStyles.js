import styled from "styled-components";
import {
  AppBar,
  Box,
} from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";


///---------------BOTTOMBAR-----------------------------------------------------------------------
export const BottomNavigationActionStyled = styled(BottomNavigationAction)`
    
    &:visited {
      color: #bc5100;
  }
  font-size: 30px;

  @media only screen and (min-width: 768px) {
    color: #ffb04c;
      &:visited {
        color: #ffb04c;
  }
    
  }
`;

export const BottomNavigationStyled = styled(BottomNavigation)`
background: #bc5100;
height: 70px;
padding-top: 10px;
@media only screen and (max-width: 767px) {
  background: #ffb04c;
  
  position: fixed;
  bottom: 0;
  width: 100%;
}

`;
////^^^^^^^^^^^^^^^^^^^^^^^^BOTTOMBAR STYLING^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-------------------
export const BoxSlider = styled(Box)`

    width: 250;
    background: #bc5100;
    height: 100%;

`;

export const StyledAppbar = styled(AppBar)`

    height: 70px;
    position: fixed;
    background: #bc5100;
`;

export const StyledSettingsIcon = styled(SettingsIcon)`

    color: #FFFFFF;
    font-size: 30px;
`;





export default {BottomNavigationActionStyled, BottomNavigationStyled, BoxSlider, StyledAppbar, StyledSettingsIcon};