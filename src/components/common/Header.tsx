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
export function Header() {

    return (
        // <Stack
        //     direction={{ xs: "column", md: "row" }}
        //     justifyContent="space-between"
        //     alignItems="center"
        //     spacing={1}
        //     sx={{ pb: 6 }}
        // >
        //     <Typography variant="body2" color="text.secondary">
        //         <Avatar alt="Popcorn" src="https://mood2movie.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.14e7e857.png&w=640&q=75" />
        //     </Typography>

        //     <Typography variant="body2" color="white">
        //         Mood2Movie
        //     </Typography>

        //     <Typography variant="body2" color="text.secondary">
        //     </Typography>
        // </Stack>
        <Box sx={{ flexGrow: 1, width: '50%', ml: '25%' }}>
            <AppBar position="static" sx={{
                backgroundColor: "gray", borderRadius: '10px',
                opacity: '-moz-initial'
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Avatar alt="Popcorn" src="https://mood2movie.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.14e7e857.png&w=640&q=75" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Mood2Movie
                    </Typography>


                   
                    <Button size='large' sx={{
                         backgroundColor: "gray", borderRadius: '10px',
                         opacity: '-moz-initial'
                        ,color:'gray'}}>Edit Mood</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );

}