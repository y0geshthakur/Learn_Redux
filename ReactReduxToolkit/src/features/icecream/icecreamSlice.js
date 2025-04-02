// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfIcecreams : 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIcecreams -= action.payload
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    }
})

export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions