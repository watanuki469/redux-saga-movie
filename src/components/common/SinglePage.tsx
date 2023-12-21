import { Box, Pagination, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import SingleMoviePage from 'components/pages/SingleMoviePage';
import { movieItemActions, selectmovieItemList, selectmovieItemListSlicer } from 'features/movieItem/movieItemSlice';
import { selectSingleMovieList, singleMovieActions } from 'features/singleMovie/singleMovieSlice';
import { movieItem } from 'models';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { forEachChild } from 'typescript';


export function SinglePage() {
  const [loading, setLoading] = useState(true);
  const { imdb_id } = useParams();
  const dispatch = useAppDispatch()

  const singleList = useAppSelector(selectmovieItemList)
  const singleList2 = useAppSelector(selectSingleMovieList)

  useEffect(() => {
    // if (imdb_id) {
    //   dispatch(movieItemActions.fetchmovieItemList(imdb_id))
    //   // dispatch(singleMovieActions.fetchSingleMovieList(imdb_id))
    // }
    dispatch(movieItemActions.fetchmovieItemList(imdb_id))
  


  }, [imdb_id])
  let navigate = useNavigate()

  return (
    <div>
      <Box>
        <SingleMoviePage singleList={singleList2} />

      </Box>
    </div>
  );
}