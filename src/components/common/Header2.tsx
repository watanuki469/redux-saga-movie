import React, { useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Route, useParams } from 'react-router-dom';
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
import genresApi from 'api/genresApi';

export function Header2() {
    const { genre } = useParams<{ genre: string }>()
    // console.log(genre)

    useEffect(() => {
        // genresApi.getAll().then((response) => console.log(response))
        // genresApi.retrievegetMoviesByGenre(`${genre}`).then((response)=> console.log(response))
        genresApi.retrievegetMoviesByGenre(genre ?? '').then((response) => console.log(response))

    }, [])
    return (

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
                        {genre}
                    </Typography>

                    <Button size='large' sx={{ backgroundColor: 'red', color: 'white' }}>Edit Mood</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );

}