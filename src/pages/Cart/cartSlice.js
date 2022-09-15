import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: {
            items: [],
            isFetching: false,
            error: false,
            isAdded: false,
            isDeleted: false
        },
        booked: {
            items: [],
            isFetching: false,
            error: false,
            isBooked: false,
            isCanceled: false
        },
        index: null,
        selector: [],
        
    },
    reducers: {
        addItemStart: (state) => {
            state.cart.isFetching = true
        },
        addItemSuccess: (state, action) => {
            state.cart.isFetching= false
            state.cart.isAdded = action.payload
            state.cart.error = false
        },
        addItemFailed: (state) => {
            state.cart.isFetching = false
            state.cart.error = true
        },
        bookItemStart: (state) => {
            state.booked.isFetching = true
        },
        bookItemSuccess: (state, action) => {
            state.booked.isFetching= false
            state.booked.isBooked = action.payload
            state.booked.error = false
        },
        bookItemFailed: (state) => {
            state.booked.isFetching = false
            state.booked.error = true
        },
        getItemStart: (state) => {
            state.cart.isFetching = true
        },
        getItemSuccess: (state, action) => {
            state.cart.isFetching= false
            state.cart.items = action.payload
            state.cart.error = false
        },
        getItemFailed: (state) => {
            state.cart.isFetching = false
            state.cart.error = true
        },
        checkSelector: (state, action) => {
            state.selector = action.payload
        },
        getIndex: (state, action) => {
            state.index = action.payload
        },
        updateAmount: (state, action) => {
            state.cart.items[state.index].amount = action.payload
            state.cart.items = [...state.cart.items]
        },
        isDeleteItem: (state, action) => {
            state.cart.isDeleted = action.payload
        },
        getBooked: (state, action) => {
            state.booked.isFetching= false
            state.booked.items = action.payload
            state.booked.error = false
        },
        isCancelItems: (state, action) => {
            state.booked.isCanceled = action.payload
        },
    }
})

export const  {
    addItemSuccess,
    addItemStart,
    addItemFailed,
    bookItemSuccess,
    bookItemStart,
    bookItemFailed,
    getItemSuccess,
    getItemStart,
    getItemFailed,
    checkSelector,
    getIndex,
    updateAmount,
    isDeleteItem,
    getBooked,
    isCancelItems
    } = cartSlice.actions;
    export default cartSlice.reducer