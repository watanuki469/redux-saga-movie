import { AppBar, Avatar, Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Stack, Toolbar, Typography, } from "@mui/material";
import { useAppSelector } from "app/hooks";
import { movieItem } from 'models';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { red, yellow } from "@mui/material/colors";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export interface movieItemPageProps {
  movieItemList: movieItem[]
}

export default function MovieItemPage({
  movieItemList
}: movieItemPageProps) {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<movieItem>();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenClick = (item: movieItem) => {
    setSelectedMovie(item)
    setOpen(true)
  }
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',color:'white' }}
    >    •
    </Box>
  );

  return (
    <div>
      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {movieItemList?.map(item =>
          <Grid item xs={4} md={3} lg={2.4} >
            <Stack alignItems="center">
              <img
                src={item.banner}
                style={{ height: "280px" }}

                onClick={() => handleOpenClick(item)}
              />
              <Typography variant="h6" color="white">
                {item.title}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {item.imdb_id}
              </Typography> */}
            </Stack>
          </Grid>
        )}
      </Grid>
      {/* Dialog */}
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ bgcolor: "#0B0831" }}
      >
        <div style={{ width: '100%', margin: "auto" }}>

          <Box sx={{ flexGrow: 1, bgcolor: "#0B0831" }}>
            {/* <AppBar position="static" sx={{
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:'center' }}>
                  {selectedMovie?.content_rating}
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
            </AppBar> */}
            <Box sx={{ borderRadius: '50px'
            // , mt: '30px'
             , bgcolor: "#0B0831"}}>
              <iframe src={selectedMovie?.trailer} width="99.5%" height
                ="350px"></iframe>
            </Box>

            <Card sx={{ bgcolor: "#0B0831" }}>
              <CardContent>
                <Typography variant="h4" color="white" sx={{ textAlign: "left" }}>
                  {selectedMovie?.title}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="h5" color="white">
                  <Typography variant="h5" component="div" sx={{ textAlign: "left" }} >
                    {selectedMovie?.year} {bull}
                    {selectedMovie?.movie_length}min{bull}
                    <StarBorderIcon  fontSize="small" strokeWidth={9.5} sx={{ color: yellow[500] }} />
                    {selectedMovie?.rating}/10
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

                    {selectedMovie?.gen.map(item =>
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
                <Typography variant="h5" color="white" sx={{ textAlign: "left" }}>
                  {selectedMovie?.description}
                </Typography>
              </CardContent>

            </Card>
          </Box >


        </div >
      </Dialog>

    </div>
  );
}