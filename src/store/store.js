import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice';
import filmsReducer from '../reducers/filmsReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    films: filmsReducer
  },
})