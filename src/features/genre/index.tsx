import {Box} from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import { genreActions, selectGenreList } from './genreSlice';
import GenrePage from './GenrePage';

export default function Dashboard() {

  const genreList = useAppSelector(selectGenreList);

  const dispatch = useAppDispatch()
  useEffect(() => {
   dispatch(genreActions.fetchGenreList({}))
  }, [])

  useEffect(() => {
    console.log('genre list  ' + genreList);
  }, [genreList])

  return (
    <div>
      <Box>
        <GenrePage genresList={genreList} />
      </Box>
    </div>
  );
}