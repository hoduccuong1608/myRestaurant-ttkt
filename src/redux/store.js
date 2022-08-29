import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../pages/Login/loginSlice'
import registerReducer from '../pages/Register/registerSlice'
import getItemReducer from '../pages/Menu/itemSlice'


export const store =  configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    item: getItemReducer
  },
})