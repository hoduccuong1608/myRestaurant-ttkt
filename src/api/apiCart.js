import axios from "axios";
import {addItemSuccess, addItemStart, addItemFailed, bookItemSuccess,
    bookItemStart, bookItemFailed, isCancelItems,getItemSuccess, getItemStart,
    getItemFailed, isDeleteItem, getBooked, checkSelector, 
    } from '../pages/Cart/cartSlice'


export const addToCart = async(items, dispatch) => {
    dispatch(addItemStart());
    try {
        const response = await axios.post("http://localhost:5000/api/cart/add",items)
        // console.log(JSON.parse(response.data))
        dispatch(addItemSuccess(true))
        setTimeout(() => {dispatch(addItemSuccess(false))},2000)
    }catch (err) {
        dispatch(addItemFailed())
    }
}

export const getCart = async(id, dispatch) => {
    dispatch(getItemStart());
    try {
        const response = await axios.get(`http://localhost:5000/api/cart/${id}`)
        dispatch(getItemSuccess(response.data[0].Cart))
        // console.log(response.data[0].Cart)
    }catch (err) {
        dispatch(getItemFailed())
    }
}

export const getListBooked = async(id, dispatch) => {

    try {
        const response = await axios.get(`http://localhost:5000/api/book/${id}`)
        dispatch(getBooked(response.data))
    }catch (err) {
        console.log(err)
    }
}

export const deleteItem = async(data, dispatch) => {

    try {
        const response = await axios.post(`http://localhost:5000/api/cart/edit`, data)
        // if(response != null) {
            dispatch(isDeleteItem(true))
            // dispatch(addItemSuccess(response.data))
        setTimeout(() => {dispatch(isDeleteItem(false))},2000)
        // }
    }catch (err) {
        console.log(err)
    }
}

export const bookItem = async(items, dispatch) => {
    dispatch(bookItemStart());
    try {
        const response = await axios.post("http://localhost:5000/api/book/product",items)
        // console.log(response.data)
        dispatch(bookItemSuccess(response.data))
        dispatch(checkSelector([]))
        setTimeout(() =>{
            dispatch(bookItemSuccess(false))
        },3000)
    }catch (err) {
        dispatch(bookItemFailed())
    }
}

export const cancelItems = async(data, dispatch) => {

    try {
        const response = await axios.post(`http://localhost:5000/api/booked/cancel`, data)
        dispatch(isCancelItems(true))
        setTimeout(() => {dispatch(isCancelItems(false))},3000)
        // console.log(response.data)
        // }
    }catch (err) {
        console.log(err)
    }
}