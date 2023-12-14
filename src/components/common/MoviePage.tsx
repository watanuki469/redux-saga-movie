import { Box, Grid, Typography, collapseClasses } from '@mui/material';
import genresApi from 'api/genresApi';
import axios from 'axios';
import { MovieLayout } from 'components/layout';
// import { Moviem } from 'components/layout/Movie copy';
import { Console, error } from 'console';
import { Movie, movieItem } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// export interface MoviePageProps {
//   initialValues?: Movie;
//   // onSubmit?: (formValues: Student) => void;
// }

// export default function MoviePage({ initialValues }: MoviePageProps) {
export default function MoviePage() {
  const { genre } = useParams<{ genre: any }>()
  // const [movieItem, setMovieItem] = useState<movieItem>();
  // const [movie, setMovie] = useState<any>([])
  // const [movieByImdbId, setmovieByImdbId] = useState<any>([])
  // const [movieItem, setMovieItem] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  // const [movie, setMovie] = useState<Movie>();
  const [movie, setMovie] = useState<any>([]);
  const [movieItem, setMovieItem] = useState<any>([]);

  // const initialValues2: movieItem = {
  //   imdb_id: '',
  //   title: '',
  //   year: '',
  //   popularity: '',
  //   description: '',
  //   content_rating: '',
  //   movie_length: '',
  //   rating: '',
  //   created_at: '',
  //   trailer: '',
  //   image_url: '',
  //   release: '',
  //   plot: '',
  //   banner: '',
  //   type: '',
  //   ...movieItem,
  // } as movieItem
  const initialValues: Movie = {
    imdb_id: '',
    title: '',
    ...movie,
  } as Movie
  useEffect(() => {
    (async () => {
      try {
        const data: Movie = await genresApi.retrievegetMoviesByGenre(genre)
        setMovie(data)
      } catch (error) {
        console.log('fail to fetch student details', error)
      }
    })();
  }, [genre])
  console.log(initialValues.imdb_id+'from mive page')
  // console.log("from movie page" + setMovieItem)

  return (
    <div className="horizontal-list">
      <Box mt={3}>
        <div/>
      </Box>
    </div>

  );


}