import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching= false
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFailed: (state) => {
            state.login.isFetching = false
            state.login.error = true
        }
    }
})
export const  {
    loginStart,
    loginSuccess,
    loginFailed } = loginSlice.actions;
    export default loginSlice.reducer