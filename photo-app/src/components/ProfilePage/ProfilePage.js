import React, { useContext } from "react";
import fire from "../../base";
import { Link } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import {
  BoxContainer,
  ButtonStyled,
  LoggedUser,
  EmailButton,
  TypographyProfile,
  ProfileDivContainer,
  AvatarStyledBar,
} from "./ProfilePageStyling";
//Authcontext, userdata
import { AuthContext } from "../../Auth";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <BoxContainer>
      <AvatarStyledBar icon={<FaceIcon style={{ fontSize: "10vh" }} />} />
      <LoggedUser>{`${currentUser.username.toUpperCase()}`}</LoggedUser>
      <ProfileDivContainer>
        <TypographyProfile>
          <Link href="#" style={{ color: "#f57f17" }}>
            Change Avatar
          </Link>
          <br />
          <Link href="#" style={{ color: "#f57f17" }}>
            Change Email
          </Link>
          <br />
          <Link href="#" style={{ color: "#f57f17" }}>
            Change Username
          </Link>
          <br />
          <Link href="#" style={{ color: "#f57f17" }}>
            Change Password
          </Link>
        </TypographyProfile>

        <EmailButton href="mailto:Agust.Ronnback@cmeducations.se?&subject=Feedback&body=We%20apreciate%20you%20taking%20time%20to%20send%20us%20your%20feedback">
          Send us your Feedback
        </EmailButton>
        <div>
          <ButtonStyled
            onClick={() => fire.auth().signOut().then(window.location.reload())}
          >
            Log out
          </ButtonStyled>
        </div>
      </ProfileDivContainer>
    </BoxContainer>
  );
};

export default ProfilePage;
