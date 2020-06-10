import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


import { Box, Typography } from "@material-ui/core";
import { BoxContainer } from './ProfilePageStyling';

export class ProfilePage extends Component {
    render() {
        return (
            <>
            <BoxContainer>
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <Divider />
                    <MenuItem>My Account</MenuItem>
                </MenuList>
            </BoxContainer>
            </>
        )
    }
}

export default ProfilePage
