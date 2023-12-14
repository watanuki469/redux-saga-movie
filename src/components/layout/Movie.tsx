// import { ReactNode, useEffect, useState } from 'react';
import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Pagination, Typography } from '@mui/material';
import genresApi from 'api/genresApi';
import { Footer, Header2 } from 'components/common';
import { Container, Grid, Stack } from "@mui/material";
import { Route, useParams } from 'react-router-dom';
import { Movie } from 'models';
import axios from 'axios';
import path from 'path/win32';
import { useDebounce } from "hook/useDebounce";
import { genreActions, selectGenreFilter, selectGenrePagination } from "features/genre/genreSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MoviePage from "components/common/MoviePage";

export function MovieLayout() {

  const { genre } = useParams<{ genre: string }>()
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10
  const [movies, setMovies] = useState<any[]>([])
  // const [movies, setMovies] = useState([]);
  const debouncedLoad = useDebounce(loading)
  const filter = useAppSelector(selectGenreFilter);
  const dispatch = useAppDispatch()
  const pagination = useAppSelector(selectGenrePagination)

  const handlePageChange = (e: any, page: number) => {
    dispatch(
      genreActions.setFilter({
        ...filter,
        _page: page,
        
      })
    );
  };
 
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre}/?page=${page}`,
  //     headers: {
  //       'X-RapidAPI-Key': 'a2a95be700msha63091279c27375p19ad20jsn429dfc2eaedb',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
  //     },
  //   };
  //   console.log(options)
  //   const fetchApi = async () => {
  //     const res = await axios.request(options).then(function (response) {
  //       return response.data.results;
  //     });
     
  //     const result = res.filter((_: any, index: any) => {
  //       return index < 35;
  //     });
  //     // console.log(result);

  //     await result.forEach((mov: any) => {
  //       const options1 = {
  //         method: "GET",
  //         url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${mov.imdb_id}`,
  //         headers: {
  //           'X-RapidAPI-Key': 'a2a95be700msha63091279c27375p19ad20jsn429dfc2eaedb',
  //           'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
  //         },
  //       };
  //       // axios.request(options1).then(function (response) {
  //       // setMovies((prev) => [...prev, response.data.results]);});
  //       axios.request(options1).then(function (response) {
  //         setMovies((prev) => [...prev,
  //         response.data.results
  //         ]);
  //       });

  //     });
  //     setLoading(false);
  //   };
  //   fetchApi();
  //   return () => {
  //     setMovies([]);
  //   };
  // }, [page, genre]);

  return (
    <div>
      <Header2 />
      <MoviePage/>
      <MoviePage/>
      <div className={`${loading ? "block" : "hidden"} `}>
        <CircularProgress disableShrink />
      </div>
      <div className={`${loading ? "hidden" : "block"}`}>
        <div>
          {/* Title and notice */}
            {/* <span>{genre}</span> */}
          {/* Show Movie */}
          {/* <div style={{ width: '80%', marginLeft: '13%' }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 1,
                rowGap: 1,
                gridTemplateColumns: 'repeat(5, 1fr)',
              }} >
              <Grid>
                {movies.map((movie) => (
                  <div key={movie}>
                    <img
                      src={movie.banner}
                      style={{ height: "250px", width: "100%", maxWidth: "278px", minWidth: "278px", objectFit: "contain" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {movie.title}
                    </Typography>

                  </div>

                ))}
              </Grid>
            </Box>
          </div> */}

          {/* Control Page */}
          {/* Pagination */}
          <Box my={2} display="flex" justifyContent="center">
            <Pagination
              color="primary"
              count={Math.ceil(pagination._totalRows / pagination._limit)}
              page={pagination?._page}
              onChange={handlePageChange}
            />
          </Box>


        </div>
      </div>
      <Footer />
    </div >
  );
};


