import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import genreReducer from 'features/genre/genreSlice'
import movieReducer from 'features/movie/movieSlice'
import movieItemReducer from 'features/movieItem/movieItemSlice'
import singleMovieReducer from 'features/singleMovie/singleMovieSlice'


const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    genre: genreReducer,
    movie:movieReducer,
    movieItem:movieItemReducer,
    singleMovie:singleMovieReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
