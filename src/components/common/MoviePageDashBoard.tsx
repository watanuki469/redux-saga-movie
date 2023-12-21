import { Box, Pagination, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import MoviePage from 'components/pages/moviePage';
import { movieActions, selectMovieList } from 'features/movie/movieSlice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MoviePageDashBoard() {

  const { genre } = useParams<{ genre: string }>()

  const movieList = useAppSelector(selectMovieList);
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(movieActions.fetchMovieList(genre))
  }, [genre])

  return (
    <div>
      <Box>
        <MoviePage movieList={movieList} />
      </Box>
    </div>
  );
}