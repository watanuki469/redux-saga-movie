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
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import genresApi from 'api/genresApi';
import { movieItemActions, selectmovieItemList } from './movieItemSlice';


export default function movieItemPage() {

  const movieItemList = useAppSelector(selectmovieItemList);

  const dispatch = useAppDispatch()
  useEffect(() => {
    // genresApi.getAll().then((response) => console.log(response))
    dispatch(movieItemActions.fetchmovieItemList({}))
  }, [])

  useEffect(() => {
    console.log(movieItemList);
  }, [movieItemList])

  return (
    <div>
      <Box>
        {/* <ListPage movieItemList={movieItemList} />   */}
      </Box>
    </div>
  );
}