import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        listOrder: {
            list: [],
            isAccess: false,
            isDelete: false, 
            refundMoney: false
        } ,
        users: {
            list: [],
            isDelete: false,
            isEdit: false
        },
        table: {
            list: [],
            isDelete: false,
            isEdit: false
        }
    },
    reducers: {
        getListOrder: (state, action) => {
            state.listOrder.list = action.payload
        },
        isRefundMoney: (state, action) => {
            state.listOrder.refundMoney = action.payload
        }
    }
})

export const  {
    getListOrder,
    isRefundMoney
    } = adminSlice.actions;
    export default adminSlice.reducer