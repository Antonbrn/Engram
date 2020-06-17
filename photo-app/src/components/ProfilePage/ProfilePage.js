import React, { Component, useState, useContext } from 'react';
import { Box, Avatar } from '@material-ui/core';
import fire from "../../base";
import {
    BoxContainer,
    StyledTextField,
    ButtonStyled,
    AvatarStyled,
    LoggedUser
} from './ProfilePageStyling';
//Authcontext, userdata
import { AuthContext } from "../../Auth";




// export class ProfilePage extends Component 


const ProfilePage = () =>{

    const { currentUser } = useContext(AuthContext);
  //currentUser context


    return (
        <BoxContainer>
            <AvatarStyled style={{background: "transparent", color: "#bc5100",}}/>
            
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

            <ButtonStyled
                onClick={() => fire.auth().signOut().then(window.location.reload())}
            >
                Log out
        </ButtonStyled>
        </BoxContainer>
    )

}

export default ProfilePage
