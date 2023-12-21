import { AppBar, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Stack, Toolbar, Typography, styled, } from "@mui/material";
import { red, yellow } from "@mui/material/colors";
import { Movie, movieItem } from 'models';
import { useNavigate } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ArrowForwardIos } from "@mui/icons-material";

export interface SingleMoviePageProps {
    singleList: movieItem[];
}

export default function SingleMoviePage({
    singleList,


}: SingleMoviePageProps) {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    let navigate = useNavigate();
    return (
        <div style={{ width: '50%', margin: "auto" }}>
            {singleList.map(item =>
                <Box sx={{ flexGrow: 1, }}>
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
                                {item.content_rating}
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
                    <Box sx={{ borderRadius: '50px', mt: '30px' }}>
                        <iframe src={item.trailer} width="99.5%" height
                            ="350px">nfkn</iframe>
                    </Box>

                    <Card sx={{ bgcolor: "#0B0831" }}>
                        <CardContent>
                            <Typography variant="h4" color="white" sx={{ textAlign: "left" }}>
                                {item.title}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h5" color="white">
                                <Typography variant="h5" component="div" sx={{ textAlign: "left" }} >
                                    {item.year} {bull}
                                    {item.movie_length}min{bull}
                                    <StarBorderIcon strokeWidth={9.5} sx={{ color: yellow[500], precision: '0.5' }} />
                                    {item.rating}/10
                                </Typography>
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Grid container spacing={2} justifyContent="left">
                                <Box
                                    sx={{
                                        display: 'grid',
                                        columnGap: 2,
                                        rowGap: 2,
                                        gridTemplateColumns: 'repeat(5, 1fr)',
                                    }} >
                                    {item.gen.map(item =>
                                        <Button variant="contained"
                                            onClick={() => navigate(`/movie/byGen/${item.genre}`)}
                                            sx={{
                                                textTransform: 'uppercase', textAlign: 'center'
                                                , minHeight: '1rem', width: '10rem', ':hover': {
                                                    bgcolor: 'red',
                                                    color: 'black',
                                                },
                                                background: "linear-gradient(180deg,grey,transparent) border-box",
                                                border: "2px solid transparent",
                                                paddingLeft: '1rem', paddingRight: '1rem',
                                                backgroundColor: 'black',
                                                color: 'red',
                                                borderRadius: '1rem',
                                                '--Grid-borderWidth': '1px',
                                                 borderColor: 'pink',

                                            }}>
                                            {item.genre}
                                        </Button>
                                    )}
                                </Box>
                            </Grid>
                        </CardContent>

                        <CardContent>
                            <Typography variant="h4" color="white" sx={{ textAlign: "center" }}>
                                {item.description}
                            </Typography>
                        </CardContent>

                    </Card>
                </Box >

            )
            }
        </div >
    );
}