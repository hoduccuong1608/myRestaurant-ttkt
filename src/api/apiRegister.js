import axios from "axios";
import { registerFailed, registerStart, registerSuccess } from "../pages/Register/registerSlice";

export const registerUser = async(newUser,dispatch, navigate) => {
    dispatch(registerStart());
    
    try {
        await axios.post("http://localhost:5000/api/register",newUser)
        dispatch(registerSuccess())
        navigate('/login',{replace: true})
    }catch (err) {
        dispatch(registerFailed())
        alert('Email da ton tai');
    }
}