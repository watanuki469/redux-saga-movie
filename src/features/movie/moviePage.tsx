import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MovieItemPage from "features/movieItem/movieItemPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { Movie } from 'models';
import { useEffect, useState } from "react";

export interface MoviePageProps {
  movieList: Movie[]
}

export default function MoviePage({
  movieList
}: MoviePageProps) {
  // const [movies, setMovies] = useState<any[]>([])
  // const [movies, setMovies] = useState([]);
  const dispatch = useAppDispatch()
  const movieItemList = useAppSelector(selectmovieItemList)

  // useEffect(() => {
  //   movieList.forEach(item => {
  //     dispatch(movieItemActions.fetchmovieItemList(item.imdb_id))
  //     // setMovies((prev) => [...prev, movieItemList]);
  //     setMovies(movieItemList)

  // setMovies((prev) => [...prev, movieItemList]);
  //   })
  // })
  useEffect(() => {
    if (movieList) {
      movieList?.map(item => {
        dispatch(movieItemActions.fetchmovieItemList(item.imdb_id))
      })
    }
  }, [movieList])


  useEffect(() => {
    console.log('movie item list  ', movieItemList);
  }, [movieItemList])

  return (
    <div style={{ width: '80%', marginLeft: '13%' }}>
      <MovieItemPage movieItemList={movieItemList} />
    </div >


  );
}