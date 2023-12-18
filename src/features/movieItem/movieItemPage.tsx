import { Box, Button, Typography, styled, } from "@mui/material";
import { movieItem } from 'models';
import { useNavigate, Navigate, useParams, } from "react-router-dom";

export interface movieItemPageProps {
  movieItemList: movieItem[];
}

export default function MovieItemPage({
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