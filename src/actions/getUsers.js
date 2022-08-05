import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const GET_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk('FETCH_USERS', async() => {
    try{
      const users = await axios.get(GET_URL);
      return [...users.data];
    }
    catch(e){
      return e.message
    }
  })