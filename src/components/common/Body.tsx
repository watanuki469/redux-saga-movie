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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dashboard from 'features/genre';

export function Body() {

    return (
        <CardContent>
            <Typography variant='h2' color="white" gutterBottom>
                Discover top-rated movies based on your mood
            </Typography>
            <Typography variant="h4" color="white" component="div">
                How are you feeling now?
            </Typography>
        </CardContent>
    );
}