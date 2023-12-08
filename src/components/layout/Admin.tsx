import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Route } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { Mail, Notifications, Pets } from "@mui/icons-material";

import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    Toolbar,
    Typography,
} from "@mui/material";
import { Header, Body, Genre, Header2, Footer } from 'components/common';

export function AdminLayout() {
    // const classes = useStyles();

    return (
        <Box sx={{ bgcolor: "black", position: "relative" }}>
            <Header />
            {/* <Header2/> */}
            <Body />
            <Genre />
            <Footer/>
        </Box>
    );
}