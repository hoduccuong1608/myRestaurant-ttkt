import axios from "axios";
import { profileUpdateFailed, profileUpdateStart, profileUpdateSuccess, isUpdateProfile } from "../pages/Profile/profileSlice";
import { loginSuccess } from "../pages/Login/loginSlice";
export const updateUser = async(user,dispatch) => {
    dispatch(profileUpdateStart());
    
    try {
        const response = await axios.post("http://localhost:5000/api/user/update",user)
        
        dispatch(loginSuccess(response.data[0]))
        dispatch(profileUpdateSuccess(response.data[0]))
        dispatch(isUpdateProfile(true))
        setTimeout(()=> {
            dispatch(isUpdateProfile(false))
        }, 2000)
        if(response.data[0].UserID) {
            localStorage.setItem("profile", JSON.stringify(response.data[0]));}
    }catch (err) {
        dispatch(profileUpdateFailed())
        dispatch(isUpdateProfile(false))
    }
}

export const rechargeUser = async(money, dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/api/user/recharge",money)
        dispatch(loginSuccess(response.data[0]))
        dispatch(profileUpdateSuccess(response.data[0]))
        dispatch(isUpdateProfile(true))
        setTimeout(()=> {
            dispatch(isUpdateProfile(false))
        }, 2000)
        localStorage.setItem("profile", JSON.stringify(response.data[0]))
        localStorage.setItem("money", JSON.stringify(response.data[0]).TotalMoney)
    }catch (err) {
        dispatch(profileUpdateFailed())
    }
}
