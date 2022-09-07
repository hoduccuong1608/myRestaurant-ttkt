import { createSlice } from "@reduxjs/toolkit";
const profile = JSON.parse(localStorage.getItem('profile'))
const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileUpdate: {
            inforUser: profile ? profile : null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        profileUpdateStart: (state) => {
            state.profileUpdate.isFetching = true
        },
        profileUpdateSuccess: (state, action) => {
            state.profileUpdate.isFetching= false
            state.profileUpdate.inforUser = action.payload
            state.profileUpdate.error = false
        },
        profileUpdateFailed: (state) => {
            state.profileUpdate.isFetching = false
            state.profileUpdate.error = true
        },
    }
})
export const  {
    profileUpdateStart,
    profileUpdateSuccess,
    profileUpdateFailed,
    } = profileSlice.actions;
    export default profileSlice.reducer