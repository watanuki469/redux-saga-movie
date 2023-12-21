import { Grid, Stack, Typography, } from "@mui/material";
import { useAppSelector } from "app/hooks";
import { selectMovieFilter, selectmoviePagination } from "features/movie/movieSlice";
import { movieItem } from 'models';
import { useNavigate } from "react-router-dom";

export interface movieItemPageProps {
  movieItemList: movieItem[]
}

export default function MovieItemPage({
  movieItemList
}: movieItemPageProps) {
  let navigate = useNavigate();

  return (
    <div>
      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {movieItemList?.map(item =>
          <Grid item xs={4} md={3} lg={2.4} >
            <Stack alignItems="center">
              <img
                src={item.banner}
                style={{ height: "240px"}}
    
                onClick={() => navigate(`/movie/id/${item.imdb_id}`)}
              />
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.imdb_id}
              </Typography>
            </Stack>
          </Grid>
        )}
      </Grid>
     
    </div>
  );
}