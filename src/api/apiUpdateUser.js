import axios from "axios";
import { profileUpdateFailed, profileUpdateStart, profileUpdateSuccess } from "../pages/UserProfile/profileSlice";
import { loginSuccess } from "../pages/Login/loginSlice";
export const updateUser = async(user,dispatch) => {
    dispatch(profileUpdateStart());
    
    try {
        const response = await axios.post("http://localhost:5000/api/user/update",user)
        // dispatch(profileUpdateSuccess(response.data))
        dispatch(loginSuccess(response.data[0]))
        dispatch(profileUpdateSuccess(response.data[0]))
        if(response.data[0].UserID) {localStorage.setItem("profile", JSON.stringify(response.data[0]));}
    }catch (err) {
        dispatch(profileUpdateFailed())
    }
}

export const rechargeUser = async(money, dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/api/user/recharge",money)
        dispatch(loginSuccess(response.data[0]))
        dispatch(profileUpdateSuccess(response.data[0]))
        if(response.data[0].Money) {localStorage.setItem("profile", JSON.stringify(response.data[0]));}
    }catch (err) {
        dispatch(profileUpdateFailed())
    }
}
