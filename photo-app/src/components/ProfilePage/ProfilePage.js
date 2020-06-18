import React, { useContext } from 'react';
import fire from "../../base";
import {
    BoxContainer,
    StyledTextField,
    ButtonStyled,
    AvatarStyled,
    LoggedUser,
    EmailButton
} from './ProfilePageStyling';
//Authcontext, userdata
import { AuthContext } from "../../Auth";


const ProfilePage = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <BoxContainer>
            <AvatarStyled style={{ background: "transparent", color: "#bc5100", }} />

            <LoggedUser>{`${currentUser.username.toUpperCase()}`}</LoggedUser>
            <ButtonStyled
                type="submit">
                Add Avatar
                </ButtonStyled>
            <StyledTextField
                disabled
                name="ChangeEmail"
                label="Change Email (coming soon)"
                type="text"
                InputProps={{ disableUnderline: true }}
            />
            <StyledTextField
                disabled
                name="ChangeUsername"
                label="Change Username (Coming soon)"
                type="text"
                InputProps={{ disableUnderline: true }}
            />
            <StyledTextField
                disabled
                name="ChangePassword"
                label="Change Password (coming soon)"
                type="text"
                InputProps={{ disableUnderline: true }}
            />

            <EmailButton
                a href="mailto:Agust.Ronnback@cmeducations.se?&subject=Feedback&body=We%20apreciate%20you%20taking%20time%20to%20send%20us%20your%20feedback">
                Send us your Feedback
        </EmailButton>
        
            <ButtonStyled
                onClick={() => fire.auth().signOut().then(window.location.reload())}
            >
                Log out
        </ButtonStyled>

        </BoxContainer>
    )

}

export default ProfilePage
