import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        dishs:{
            listDishs: null,
            isFetching: false,
            error: false
        },
        drinks:{
            listDrinks: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getDishStart: (state) => {
            state.dishs.isFetching = true
        },
        getDishSuccess: (state, action) => {
            state.dishs.isFetching= false
            state.dishs.listDishs = action.payload
            state.dishs.error = false
        },
        getDishFailed: (state) => {
            state.dishs.isFetching = false
            state.dishs.error = true
        },
        getDrinkStart: (state) => {
            state.drinks.isFetching = true
        },
        getDrinkSuccess: (state, action) => {
            state.drinks.isFetching= false
            state.drinks.listDrinks = action.payload
            state.drinks.error = false
        },
        getDrinkFailed: (state) => {
            state.drinks.isFetching = false
            state.drinks.error = true
        }
    }
})

export const  {
    getDishStart,
    getDishSuccess,
    getDishFailed,
    getDrinkStart,
    getDrinkSuccess,
    getDrinkFailed } = itemSlice.actions;
    export default itemSlice.reducer