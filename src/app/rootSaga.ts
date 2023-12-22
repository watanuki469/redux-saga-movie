import { all } from 'redux-saga/effects'
import genreSaga from 'features/genre/genreSaga';
import movieSaga from 'features/movie/movieSaga';
import movieItemSaga from 'features/movieItem/movieItemSaga';
import singleMovieSaga from 'features/singleMovie/singleMovieSaga';

export default function* rootSaga() {
    console.log('rootSaga')
  yield all([genreSaga(),movieSaga(),movieItemSaga(),singleMovieSaga()]);
}