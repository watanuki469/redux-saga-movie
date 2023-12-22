import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { movieItem } from "models";

export interface movieItemState {
    loading: boolean;
    list: movieItem[];
}

const initialState: movieItemState = {
    loading: false,
    list: [],
};

const movieItemSlice = createSlice({
    name: 'movieItem',
    initialState,
    reducers: {
        fetchmovieItemList(state, action: PayloadAction<any>) {
            state.loading = true;
        },
        //cập nhật vào redux từ fetch movie item list
        fetchmovieItemListSuccess(state, action: PayloadAction<any>) {
            state.list = [...state.list, action.payload.results]
            state.loading = false
        },
        fetchmovieItemListFailed(state, action: PayloadAction<string>) {
            state.loading = false
        },   
    }
})
//Actions
export const movieItemActions = movieItemSlice.actions
//Selectors
export const selectmovieItemList = (state: RootState) => state.movieItem.list
export const selectmovieItemListSlicer = (state: RootState) => state.movieItem.list.slice

// Reducer
const movieItemReducer = movieItemSlice.reducer;
export default movieItemReducer