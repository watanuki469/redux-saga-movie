import { Box, Button, CircularProgress, Pagination, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Footer, Header2, SinglePage } from "components/common";
import MovieItemPage from "components/pages/movieItemPage";
import { movieItemActions, selectmovieItemList } from "features/movieItem/movieItemSlice";
import { Movie, movieItem } from 'models';
import { useEffect, useState } from "react";

export function SingleMovie() {

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Box sx={{ bgcolor: "black", position: "relative" }}>
        <SinglePage />

        <div className={`${loading ? "block" : "hidden"} `}>
          <CircularProgress disableShrink />
        </div>
        <Footer />
      </Box>
    </div >
  );
};

