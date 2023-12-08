import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Route } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Icon,
  InputBase,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect } from 'react';
import axios from 'axios';
import { genreActions, selectGenreList } from './genreSlice';
import { useDispatch } from 'react-redux';
import StatisticItem from './ListPage';
import DeleteIcon from '@mui/icons-material/Delete';
import ListPage from './ListPage';
import genresApi from 'api/genresApi';

export default function Dashboard() {

  const genreList = useAppSelector(selectGenreList);

  const dispatch = useAppDispatch()
  useEffect(() => {
    // genresApi.getAll().then((response) => console.log(response))
    dispatch(genreActions.fetchGenreList({}))
  }, [])

  useEffect(() => {
    console.log(genreList);
  }, [genreList])

  return (
    <div>
      <Box>
        <ListPage genresList={genreList} />  
      </Box>
    </div>
  );
}