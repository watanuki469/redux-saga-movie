// import { ReactNode, useEffect, useState } from 'react';
import  { useEffect, useState } from "react";
import { Box, Button, CircularProgress } from '@mui/material';
import { Footer, Header2 } from 'components/common';
import { Route, useParams } from 'react-router-dom';
import { useDebounce } from "hook/useDebounce";
import { genreActions, selectGenreFilter } from "features/genre/genreSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MoviePageDashBoard from "components/common/MoviePageDashBoard";
import MovieItemPage from "features/movieItem/movieItemPage";
import MoviePage from "features/movie/moviePage";


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
  // const pagination = useAppSelector(selectGenrePagination)

  useEffect(() => {
    console.log(filter);
  }, []
  )

  const handlePageChange = (e: any, page: number) => {
    dispatch(
      genreActions.setFilter({
        ...filter,
        _page: page,

      })
    );
  };

  return (
    <div>
      <Header2 />
      <MoviePageDashBoard/>

      
      <div className={`${loading ? "block" : "hidden"} `}>
        <CircularProgress disableShrink />
      </div>
      <div className={`${loading ? "hidden" : "block"}`}>
        <div>
        

          {/* Control Page */}
          {/* Pagination */}
          <Box my={2} display="flex" justifyContent="center">
            {/* <Pagination
              color="primary"
              count={Math.ceil(pagination._totalRows / pagination._limit)}
              page={pagination?._page}
              onChange={handlePageChange}
            /> */}
          </Box>


        </div>
      </div>
      <Footer />
    </div >
  );
};


