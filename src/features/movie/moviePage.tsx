import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography, styled, } from "@mui/material";
import { borders } from '@mui/system';
import { Movie } from 'models';
import { useNavigate, Navigate, useParams, } from "react-router-dom";
import MoviePage from 'components/common/MoviePage';

export interface moviePageProps {
  movieList: Movie[]
}

export default function moviePage({
  movieList
}: moviePageProps) {

  let navigate = useNavigate();

  return (

    <div style={{ width: '80%', marginLeft: '13%' }}>
      <Box>
        {movieList.map(item =>
          <div>
            <Typography>{item.imdb_id}</Typography>
            <Typography>{item.title}</Typography>
          </div>

        )}

      </Box>
    </div >

  );
}