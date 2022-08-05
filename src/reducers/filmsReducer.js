import { createSlice } from '@reduxjs/toolkit'
import { fetchFilms } from '../actions/getFilms';

export const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    films:[],
    status: 'idle',
    error:null
  },
  reducers: {
    increment: (state) => {
      state.error = null
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchFilms.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.films = state.films.concat(action.payload)
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const getAllFilms = (state) => state.films.films;
export const getStatus = (state) => state.films.status;

// Action creators are generated for each case reducer function

export const { increment } = filmsSlice.actions

export default filmsSlice.reducer