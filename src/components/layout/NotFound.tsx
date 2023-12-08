import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { Mail, Notifications, Pets } from "@mui/icons-material";

import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    InputBase,
    Menu,
    Toolbar,
    Typography,
} from "@mui/material";
import { Header, Body, Genre, Header2, Footer } from 'components/common';
import { AdminLayout } from './Admin';

export function NotFound() {
    // const classes = useStyles();
    let navigate = useNavigate();
    return (
        <Box sx={{ bgcolor: "black", position: "relative" }}>
            <Typography variant='h1' color={"white"}>Oops! Page not found</Typography>
            <Typography variant='h4' color={"white"}>The page you’re looking for doesn’t exist.  </Typography>
            <Button sx={{bgcolor:'red',color:'white'}} size='large'
            onClick={() => navigate("/")}
            >Go Home</Button>
            <Footer />
        </Box>
    );
}