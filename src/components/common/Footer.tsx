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
    Button,
    CardContent,
    Container,
    Grid,
    InputBase,
    Menu,
    Paper,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export function Footer() {

    return (
        <Box sx={{ flexGrow: 1, ml: '43%' }}>
            <AppBar position="static" sx={{
                backgroundColor: "black", borderRadius: '10px',
                opacity: '-moz-initial'
            }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ mr:2, display: { xs: 'none', md: 'flex' },flexGrow: 1 }} >
                        Made with
                        <Avatar alt="Popcorn" src="https://mood2movie.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.14e7e857.png&w=640&q=75" />
                        by
                        <Avatar alt="Remy Sharp" src="https://cdn.gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png" />
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );

}