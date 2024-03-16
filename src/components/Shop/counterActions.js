import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducer : {
        increment:(state)=> state +1,        
        decrement:(state)=>state-1,
        
    }
})