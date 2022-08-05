import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../actions/getUsers';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
    users:[],
    error:null
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers(builder){
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.users = state.users.concat(action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const getAllUsers = (state) => state.counter.users;
export const getStatus = (state) => state.counter.status;

// Action creators are generated for each case reducer function

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer