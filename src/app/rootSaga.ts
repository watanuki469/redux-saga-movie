import { all } from 'redux-saga/effects'
import genreSaga from 'features/genre/genreSaga';
import movieSaga from 'features/movie/movieSaga';

export default function* rootSaga() {
    console.log('rootSaga')
  yield all([genreSaga(),movieSaga()]);
}