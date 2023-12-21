import { Box, Pagination, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SingleMoviePage from 'components/pages/SingleMoviePage';
import { movieItemActions, selectmovieItemList } from 'features/movieItem/movieItemSlice';
import { selectSingleMovieList, singleMovieActions } from 'features/singleMovie/singleMovieSlice';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { forEachChild } from 'typescript';


export function SinglePage() {

  const { imdb_id } = useParams();
  // const singleList = useAppSelector(selectSingleMovieList)
  const singleList = useAppSelector(selectmovieItemList)
  
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (imdb_id) {
      // dispatch(singleMovieActions.fetchSingleMovieList(imdb_id))
      dispatch(movieItemActions.fetchmovieItemList(imdb_id))
    }
    console.log(singleList)
  }, [imdb_id])

  return (
    <div>
      <Box>
        <SingleMoviePage singleList={singleList} />
      </Box>
    </div>
  );
}