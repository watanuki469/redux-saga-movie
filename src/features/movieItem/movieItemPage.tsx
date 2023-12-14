import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography, styled, } from "@mui/material";
import { borders } from '@mui/system';
import { genres, movieItem } from 'models';
import { useNavigate, Navigate, useParams, } from "react-router-dom";

export interface movieItemPageProps {
  movieItemList: movieItem[];
}

export default function movieItemPage({
  movieItemList
}: movieItemPageProps) {

  let navigate = useNavigate();

  return (
    <div>
      <Box>
        {movieItemList.map(item =>
          <div>
            <img src={item.banner} />
            <Typography>{item.title}</Typography>
          </div>
        )}
      </Box>
    </div>
  );
}