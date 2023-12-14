import { PayloadAction } from '@reduxjs/toolkit';
import genresApi from 'api/genresApi';
import { ListParams, ListResponse, Movie, genres, movieItem } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { movieItemActions } from './movieItemSlice';
import { useState } from 'react';
import axios from 'axios';

// const [movieItem, setMovieItem] = useState<any[]>([])

// function* fetchMovieItemList(action: PayloadAction<ListParams>) {
//     try {
//         const options: ListResponse<Movie> = yield call(genresApi.getAll, action.payload);
//         const fetchApi = async () => {
//             const res = await axios.request(options);
//             const result = res.data.results.filter((_page: any, _limit: any) => _limit < 35);

//             for await (const mov of result) {
//                 const options1: ListResponse<movieItem> = await genresApi.retrievegetMovieByImdbId(mov.imdb_id);
//                 const response = await axios.request(options1);
//                 setMovieItem((prev) => [...prev, ...response.data.results]);
//             }
//             // setLoading(false);
//         };
//         fetchApi();
//         return () => {
//             setMovieItem([]);
//         };
//     }
//     catch (error) {
//         console.log('Failed to fetch movie list', error);
//         yield put(movieItemActions.fetchmovieItemListFailed);
//     }

// }


// export default function* genreSaga() {
//     yield takeLatest(movieItemActions.fetchmovieItemList.type, fetchMovieItemList)
// }
function* fetchMovieItemList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<genres> = yield call(genresApi.retrievegetMovieByImdbId,action.payload)
        yield put(movieItemActions.fetchmovieItemListSuccess(response))
    }
    catch (error) {
        console.log('fail to fetch movie item list', error)
        yield put(movieItemActions.fetchmovieItemListSuccess)
    }
}


export default function* movieItemSaga() {
    yield takeLatest(movieItemActions.fetchmovieItemList.type,fetchMovieItemList)
}