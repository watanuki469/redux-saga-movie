import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, movieItem } from 'models';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { singleMovieActions } from './singleMovieSlice';

function* fetchSingleMovieList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<movieItem> = yield call(genresApi.retrievegetMovieByImdbId, action.payload)
        yield put(singleMovieActions.fetchSingleMovieListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch single movie item list', error)
        yield put(singleMovieActions.fetchSingleMovieListFailed)
    }
}


export default function* movieItemSaga() {
    yield takeLatest(singleMovieActions.fetchSingleMovieList.type, fetchSingleMovieList)
}