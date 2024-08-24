import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
    state : number;
}

const initialState : TInitialState = {
    state: 0,
}

export const numberSlice = createSlice({
    name:"Number",
    initialState,
    reducers: {
        increment : (state) => {
            state.state += 1
        },
        decrement : (state) => {
            state.state -= 1
        }
    }
})

export const { increment, decrement} = numberSlice.actions;

export default numberSlice.reducer;