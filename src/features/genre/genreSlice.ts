import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store";
import { genres, ListParams, ListResponse, PaginationParams } from "models";

export interface DashboardStatistics {
    genre: string;
}
export interface DashBoardState {
    statistics: DashboardStatistics
}

export interface genreState {
    loading: boolean;
    list: genres[];
    filter: ListParams;
    pagination: PaginationParams;
}

const initialState: genreState = {
    loading: false,
    list: [],
    filter: {
        _page: 1,
        _limit: 150,
    },
    pagination: {
        _page: 1,
        _limit: 150,
        _totalRows: 150,
    },
};

const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        fetchGenreList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        fetchGenreListSuccess(state, action: PayloadAction<any>) {
            state.list = action.payload.results
            state.pagination = action.payload.pagination
            state.loading = false
        },
        fetchGenreListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        }
    }
})
//Actions
export const genreActions = genreSlice.actions
//Selectors
export const selectGenreList = (state: RootState) => state.genre.list

// Reducer
const genreReducer = genreSlice.reducer;
export default genreReducer