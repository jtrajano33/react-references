import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const GET_URL = 'https://ghibliapi.herokuapp.com/films';

export const fetchFilms = createAsyncThunk('FETCH_FILMS', async() => {
    try{
      const films = await axios.get(GET_URL);
      return [...films.data];
    }
    catch(e){
      return e.message
    }
  })