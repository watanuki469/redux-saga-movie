import genresApi from 'api/genresApi';
import { Movie, ListResponse } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { movieActions } from './movieSlice';

function* fetchMovieList() {
  try {
    // const response: ListResponse<Movie> = yield call(genresApi.());
    // yield put(movieActions.fetchMovieListSuccess(response));
  } catch (error) {
    console.log('Failed to fetch movie list', error);
    yield put(movieActions.fetchMovieListFailed());
  }
}

export default function* movieSaga() {
  yield takeLatest(movieActions.fetchMovieList.type, fetchMovieList);
}