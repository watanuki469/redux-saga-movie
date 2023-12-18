import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import ShowMovie from "components/common/ShowMovie";
import MovieItemPage from "features/movieItem/movieItemPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { Movie } from 'models';
import { useEffect } from "react";

export interface MoviePageProps {
  movieList: Movie[]
}

export default function MoviePage({
  movieList
}: MoviePageProps) {

  return (
    <div style={{ width: '80%', marginLeft: '13%' }}>
      {/* <MovieItemPage movieItemList={movieItemList} /> */}

        {movieList.map(item =>
       <Typography>
        {item.imdb_id}
       </Typography>

        )}
    </div >

  );
}