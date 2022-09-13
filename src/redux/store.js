import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../pages/Login/loginSlice'
import registerReducer from '../pages/Register/registerSlice'
import getItemReducer from '../pages/Menu/itemSlice'
import profileReducer from '../pages/UserProfile/profileSlice'
import cartReducer from '../pages/Cart/cartSlice'

export const store =  configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    item: getItemReducer,
    update: profileReducer,
    cart: cartReducer
  },
})