import styled from "styled-components";
import { AppBar, Box } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction,} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

//---- SLIDER ----
export const StyledDiv = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
`;

export const LoggedUser = styled.h4`
  color: white;
  padding-right: 20px;
`;

///---------------BOTTOMBAR-----------------------------------------------------------------------
export const BottomNavigationActionStyled = styled(BottomNavigationAction)`
  color: #bc5100 !important;
  &:visited {
    color: #bc5100 !important;
  }
  font-size: 3.2vh;

  @media only screen and (min-width: 1200px) {

  }
`;
export const AvatarStyledBar = styled(BottomNavigationAction)`
  display: flex;
  flex: 0;
  margin: auto 0 auto 0;
  color: #bc5100;
  
`;



export const BottomNavigationStyled = styled(BottomNavigation)`
  background: rgba(0, 0, 0, 0);
  height: 70px;
  padding-top: 10px;

  @media only screen and (max-width: 767px) {
    background: linear-gradient(180deg, #ffb04c 50%, #ffcf8a);
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
////^^^^^^^^^^^^^^^^^^^^^^^^BOTTOMBAR STYLING^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-------------------
export const BoxSlider = styled(Box)`
  width: 250px;
  background: #bc5100;
  height: 100%;
`;

export const StyledAppbar = styled(AppBar)`
  height: 70px;
  position: fixed;
  background: linear-gradient(90deg, #bc5100, #ffb04c);

  @media only screen and (min-width: 2000px) {
    height: 100px;
    
  }
`;

export const StyledSettingsIcon = styled(SettingsIcon)`
  color: #ffffff;
  font-size: 30px;
`;

export default {
  BottomNavigationActionStyled,
  BottomNavigationStyled,
  BoxSlider,
  StyledAppbar,
  StyledSettingsIcon,
};
