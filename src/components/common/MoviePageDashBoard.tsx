import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import MoviePage from 'features/movie/moviePage';
import { movieActions, selectMovieFilter, selectMovieList } from 'features/movie/movieSlice';
import MovieItemPage from 'features/movieItem/movieItemPage';
import { movieItemActions, selectmovieItemList } from 'features/movieItem/movieItemSlice';
import { movieItem } from 'models';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'models';

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