import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import MoviePage from 'features/movie/moviePage';
import { movieActions, selectMovieList } from 'features/movie/movieSlice';
import MovieItemPage from 'features/movieItem/movieItemPage';
import { movieItemActions, selectmovieItemList } from 'features/movieItem/movieItemSlice';
import { movieItem } from 'models';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface movieItemPageProps {
    movieItemList: movieItem[];
}

export default function ShowMovie({
    movieItemList
}: movieItemPageProps) {

    return (
        <div>
            <Box>
                {movieItemList.map(item =>
                    <div>
                        <img src={item.banner} />
                        <Typography>{item.imdb_id}</Typography>
                    </div>
                )}
            </Box>
        </div>
    );
}