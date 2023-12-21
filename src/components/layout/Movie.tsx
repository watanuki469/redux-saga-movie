// import { ReactNode, useEffect, useState } from 'react';
import { useEffect, useState } from "react";
import { Box, Button, CircularProgress } from '@mui/material';
import { Footer, Header2 } from 'components/common';
import { Route, useParams } from 'react-router-dom';
import { useDebounce } from "hook/useDebounce";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MoviePageDashBoard from "components/common/MoviePageDashBoard";
import MovieItemPage from "components/pages/movieItemPage";
import MoviePage from "components/pages/moviePage";


export function MovieLayout() {

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Header2 />
      <MoviePageDashBoard />

      <div className={`${loading ? "block" : "hidden"} `}>
        <CircularProgress disableShrink />
      </div>
      <Footer />
    </div >
  );
};


