import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Movie, ListResponse } from 'models';

export interface MovieState {
    loading: boolean;
    list: Movie[];
}

const initialState: MovieState = {
    loading: false,
    list: [],
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        fetchMovieList(state) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch city list
        fetchMovieListSuccess(state, action: PayloadAction<ListResponse<Movie>>) {
            state.loading = false;
            state.list = action.payload.data;
        },
        fetchMovieListFailed(state) {
            state.loading = false;
        },
    },
});

// Actions
export const movieActions = movieSlice.actions;

// Selectors
export const selectMovieList = (state: RootState) => state.movie.list;

export const selectMovieMap = createSelector(selectMovieList, (movieList) =>
    movieList.reduce((map: { [key: string]: Movie }, movie) => {
        map[movie.imdb_id] = movie;
        return map;
    }, {})
);

export const selectCityOptions = createSelector(selectMovieList, (movieList) =>
    movieList.map((movie) => ({
        label: movie.imdb_id,
        value: movie.title,
    }))
);

// Reducer
const movieReducer = movieSlice.reducer;
export default movieReducer;