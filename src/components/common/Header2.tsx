import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { useNavigate, useParams } from 'react-router-dom';
import { AppBar, Avatar, Box, Button, Toolbar, Typography, } from "@mui/material";
import genresApi from 'api/genresApi';
import { Movie } from 'models';
import MoviePage from './MoviePage';

export function Header2() {
    const { genre } = useParams<{ genre: string }>()
    let navigate = useNavigate();
    const [movie, setMovie] = useState([]);

    const initialValues: Movie = {
        imdb_id: "",
        title: '',
        ...movie,
    } as Movie

    // useEffect(() => {
    //     // genresApi.retrievegetMoviesByGenre(genre ?? '').then((response) => console.log(response))
    // }, [])
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             // genresApi.retrievegetMoviesByGenre(genre ?? '').then((response)=> {
    //             //     setMovie(string)
    //             //     // setMovie(response.data.results)
    //             // })
                   
    //             const data: Movie = await genresApi.retrievegetMoviesByGenre(genre ?? '')
    //             setMovie(data)

    //         } catch (error) {
    //             console.log('fail to fetch student details', error)
    //         }
    //     })();
    // }, [genre])

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
                        <Avatar alt="Popcorn" src="https://mood2movie.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.14e7e857.png&w=640&q=75"
                            onClick={() => navigate("/")}
                        />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {genre}
                       {/* <MoviePage initialValues={initialValues}>{movie}</MoviePage> */}

                    </Typography>

                    <Button size='large' sx={{
                        backgroundColor: 'red', color: 'white',
                        ':hover': {
                            bgcolor: 'black',
                            color: 'white',
                        },
                    }}
                        onClick={() => navigate("/")}
                    >Edit Mood</Button>

                </Toolbar>
            </AppBar>
        </Box>

    );

}