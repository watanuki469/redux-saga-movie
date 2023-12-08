import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import genresApi from 'api/genresApi';
import { Header2 } from 'components/common';
import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { Movie } from 'models';

export function MovieLayout() {

  const { genre } = useParams<{ genre: string }>()
  const [movie, setMovie] = useState<Movie>();
  // console.log(genre)

  const initialValues: Movie = {
    imdb_id: '',
    title: '',

    ...movie,
  } as Movie

  useEffect(() => {
    //IFFE
    (async () => {
      try {
        const data: Movie = await genresApi.retrievegetMoviesByGenre(genre ?? '')
        setMovie(data)
      } catch (error) {
        console.log('fail to fetch movie details', error)
      }
    })();
  }, [genre])

  return ( 
     <Box sx={{ bgcolor: "black", position: "relative" }}>
            
            <Header2 />
          
           
        </Box>
    

  );
}