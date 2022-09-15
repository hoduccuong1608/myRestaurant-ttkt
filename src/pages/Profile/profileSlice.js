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
        isUpdated: false
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
        isUpdateProfile: (state, action) => {
            state.isUpdated = action.payload
        },
        setMoney: (state, action) => {
            state.money = action.payload
        },
        
    }
})
export const  {
    profileUpdateStart,
    profileUpdateSuccess,
    profileUpdateFailed,
    isUpdateProfile,
    setMoney
    } = profileSlice.actions;
    export default profileSlice.reducer