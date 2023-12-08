import { all } from 'redux-saga/effects'
import genreSaga from 'features/genre/genreSaga';

export default function* rootSaga() {
    console.log('rootSaga')
  yield all([genreSaga()]);
}