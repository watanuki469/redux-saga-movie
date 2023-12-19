import { Box, Button, Typography, styled, } from "@mui/material";
import { movieItem } from 'models';

export interface movieItemPageProps {
  movieItemList: movieItem[]
}

export default function MovieItemPage({
  movieItemList
}: movieItemPageProps) {


  return (
    <div>
      <Box>
        {movieItemList?.map(item =>
          <div>
            <Typography>{item.imdb_id}</Typography>
            <Typography>{item.rating}</Typography>
          </div>
        )}
      </Box>
    </div>
  );
}