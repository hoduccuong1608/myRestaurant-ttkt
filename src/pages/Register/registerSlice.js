import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        register: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        registerStart: (state) => {
            state.register.isFetching = true
        },
        registerSuccess: (state) => {
            state.register.isFetching= false
            state.register.success = true
            state.register.error = false
        },
        registerFailed: (state) => {
            state.register.isFetching = false
            state.register.error = true
            state.register.success = false
        }
    }
})
export const  {
    registerStart,
    registerSuccess,
    registerFailed } = registerSlice.actions;
    export default registerSlice.reducer