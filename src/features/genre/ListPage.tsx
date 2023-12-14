import { Box, Button, Typography, styled, } from "@mui/material";
import { borders } from '@mui/system';
import genresApi from "api/genresApi";
import { Movie, genres } from 'models';
import { useEffect, useState } from "react";
import { useNavigate, Navigate, useParams, } from "react-router-dom";


export interface ListPageProps {
  genresList: genres[];
}

export default function ListPage({
  genresList

}: ListPageProps) {

  let navigate = useNavigate();

  return (

    <div style={{ width: '80%', marginLeft: '13%' }}>
      <Box
        sx={{
          display: 'grid',
          columnGap: 5,
          rowGap: 5,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }} >
        {genresList.map(item =>
          <Button variant="contained" size="large"
            sx={{
              fontWeight: '600', textTransform: 'uppercase', textAlign: 'center'
              , minHeight: '1rem', width: '15rem', ':hover': {
                bgcolor: 'red',
                color: 'white',
              },
              background: "linear-gradient(180deg,grey,transparent) border-box",
              border: "2px solid transparent",
              backgroundColor: 'black',
              paddingLeft: '1rem', paddingRight: '1rem',
              borderRadius: '1rem',
              '--Grid-borderWidth': '1px', borderColor: 'pink',
            }}>

            <Typography onClick={() => navigate(`/movie/byGen/${item.genre}`)}>
              {item.genre}
            </Typography>
          </Button>
        )}
      </Box>
    </div >

  );
}