import axios from "axios";
import { getListOrder, isRefundMoney } from "../pages/Admin/adminSlice";

export const getAllOrder = async(dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/admin/listOrder`)
        dispatch(getListOrder(response.data))
        // console.log(response.data[0])
    }catch (err) {
        console.log(err)
    }

}

export const refundMoney = async(money, dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/api/user/recharge",money)
        dispatch(isRefundMoney(true))
        setTimeout(() =>{
            dispatch(isRefundMoney(false))
        },3000)
    }catch (err) {
        console.log(err)
    }
}