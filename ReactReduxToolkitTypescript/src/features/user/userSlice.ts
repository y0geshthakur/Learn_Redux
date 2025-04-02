// const createSlice = require('@reduxjs/toolkit').createSlice
// const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
// const axios = require('axios')

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type users = {
    id: number
    name: string
}

type initialState = {
    loading: boolean
    users: users[]
    error: string
}

const initialState : initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<users[]>) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message || 'Something Went Wrong'
        })
    }
})

export default userSlice.reducer