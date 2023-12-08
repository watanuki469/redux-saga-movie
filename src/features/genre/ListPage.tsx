import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  InputBase,
  Menu,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { borders } from '@mui/system';
import { genres } from 'models';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";

export interface ListPageProps {
  genresList: genres[];
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListPage({
  genresList
}: ListPageProps) {


  let navigate = useNavigate();
  const { genre } = useParams<{ genre: string }>()
 
  return (

    <div style={{ width: '80%', marginLeft: '13%' }}>
      <Box
        sx={{
          display: 'grid',
          columnGap: 5,
          rowGap: 5,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }} >
        {genresList.map(item =>
          <Button variant="contained" size="large"
            sx={{
              fontWeight: '600', textTransform: 'uppercase', textAlign: 'center'
              , minHeight: '1rem', width: '15rem', ':hover': {
                bgcolor: 'red',
                color: 'white',
              },
              background: "linear-gradient(180deg,grey,transparent) border-box",
              border: "2px solid transparent",
              backgroundColor: 'black',
              paddingLeft: '1rem', paddingRight: '1rem',
              borderRadius: '1rem',
              '--Grid-borderWidth': '1px', borderColor: 'pink',
            }}>

          
            <Typography onClick={() => navigate(`/movie/byGen/${item.genre}`)}>  {item.genre}</Typography>
          </Button>

        )}
      </Box>
    </div >

  );
}