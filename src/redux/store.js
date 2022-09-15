import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../pages/Login/loginSlice'
import registerReducer from '../pages/Register/registerSlice'
import getItemReducer from '../pages/Menu/itemSlice'
import profileReducer from '../pages/Profile/profileSlice'
import cartReducer from '../pages/Cart/cartSlice'
import adminReducer from '../pages/Admin/adminSlice'

export const store =  configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    item: getItemReducer,
    profile: profileReducer,
    cart: cartReducer,
    admin: adminReducer
  },
})