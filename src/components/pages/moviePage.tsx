import { Box, Button, Pagination, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MovieItemPage from "components/pages/movieItemPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { Movie } from 'models';
import { useEffect, useState } from "react";
import { selectMovieFilter, selectmoviePagination } from "../../features/movie/movieSlice";

export interface MoviePageProps {
  movieList: Movie[]
}

export default function MoviePage({
  movieList
}: MoviePageProps) {
  const dispatch = useAppDispatch()
  const movieItemList = useAppSelector(selectmovieItemList)


  useEffect(() => {
    if (movieList) {
      movieList.map(item => {
        dispatch(movieItemActions.fetchmovieItemList(item.imdb_id))
      })
    }
  }, [movieList])

  return (
    <div style={{ width: '80%', marginLeft: '13%' }}>
      <MovieItemPage movieItemList={movieItemList} />
    </div >


  );
}