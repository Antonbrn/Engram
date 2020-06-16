import React, { Component } from 'react';
import { Box, Avatar } from '@material-ui/core';
import fire from "../../base";
import {
    BoxContainer,
    StyledTextField,
    ButtonStyled,
    AvatarStyled
} from './ProfilePageStyling';




export class ProfilePage extends Component {
    render() {
        return (
            <BoxContainer>
                <AvatarStyled>
                </AvatarStyled>

                <ButtonStyled
                    type="submit">
                    Add Avatar
                </ButtonStyled>
                <StyledTextField
                    name="ChangeEmail"
                    label="Change Email (coming soon)"
                    type="text"
                    InputProps={{ disableUnderline: true }}
                />
                <StyledTextField
                    name="ChangeUsername"
                    label="Change Username (Coming soon)"
                    type="text"
                    InputProps={{ disableUnderline: true }}
                />
                <StyledTextField
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
}

export default ProfilePage
