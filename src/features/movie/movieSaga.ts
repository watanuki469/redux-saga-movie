import genresApi from 'api/genresApi';
import { Movie, ListResponse, genres, ListParams, movieItem } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { movieActions } from './movieSlice';
import { useParams } from 'react-router-dom';
import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { genreActions, selectGenreList } from 'features/genre/genreSlice';
import React, { useEffect, useState } from 'react';


function* fetchMovieList(action: PayloadAction<ListParams>) {
    const options: ListResponse<Movie> = yield call(genresApi.retrievegetMoviesByGenre, action.payload);
    yield put(genreActions.fetchGenreListSuccess(options))
}

export default function* movieSaga() {
    yield takeLatest(movieActions.fetchMovieList.type, fetchMovieList);
  }