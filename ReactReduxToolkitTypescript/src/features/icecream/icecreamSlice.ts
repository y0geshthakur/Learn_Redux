// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialState = {
    numOfIcecreams: number
}

const initialState : initialState = {
    numOfIcecreams : 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state, action: PayloadAction<number>) => {
            state.numOfIcecreams -= action.payload
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfIcecreams += action.payload
        }
    }
})

export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions