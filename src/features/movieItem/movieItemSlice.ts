import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store";
import { ListParams, ListResponse, movieItem, PaginationParams } from "models";

export interface movieItemStatistics {
    movieItem: string;
}
export interface movieItemPage {
    statistics: movieItemStatistics
}

export interface movieItemState {
    loading: boolean;
    list: movieItem[];
    filter: ListParams;
    pagination: PaginationParams;
}

const initialState: movieItemState = {
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

const movieItemSlice = createSlice({
    name: 'movieItem',
    initialState,
    reducers: {
        fetchmovieItemList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        fetchmovieItemListSuccess(state, action: PayloadAction<any>) {
            state.list = action.payload.results
            state.pagination = action.payload.pagination
            state.loading = false
        },
        fetchmovieItemListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },
        setFilter(state,action:PayloadAction<ListParams>){
            state.filter=action.payload;
        },
    }
})
//Actions
export const movieItemActions = movieItemSlice.actions
//Selectors
export const selectmovieItemList = (state: RootState) => state.movieItem.list
export const selectmovieItemFilter = (state: RootState) => state.movieItem.filter;
export const selectmovieItemPagination = (state: RootState) => state.movieItem.pagination;
// Reducer
const movieItemReducer = movieItemSlice.reducer;
export default movieItemReducer