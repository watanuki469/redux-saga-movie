import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Movie, ListResponse, ListParams, PaginationParams } from 'models';

export interface MovieState {
    loading: boolean;
    list: Movie[];
    filter: ListParams;
    pagination: PaginationParams;
}

const initialState: MovieState = {
    loading: false,
    list: [],
    filter: {
        _page: 1,
        _limit: 15,
    },
    pagination: {
        _page: 1,
        _limit: 15,
        _totalRows: 20,
    },
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        fetchMovieList(state) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch movie list
        fetchMovieListSuccess(state, action: PayloadAction<ListResponse<Movie>>) {
            state.list = action.payload.data;
            state.pagination=action.payload.pagination
            state.loading = false;
        },
        fetchMovieListFailed(state) {
            state.loading = false;
        },
        setFilter(state,action:PayloadAction<ListParams>){
            state.filter=action.payload;
        },
    },
});

// Actions
export const movieActions = movieSlice.actions;

// Selectors
export const selectMovieList = (state: RootState) => state.movie.list;

// Reducer
const movieReducer = movieSlice.reducer;
export default movieReducer;