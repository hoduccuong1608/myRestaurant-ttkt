import axios from "axios";
import { getDishStart, getDishSuccess, getDishFailed, getDrinkStart, getDrinkSuccess, getDrinkFailed  } from "../pages/Menu/itemSlice";

export const getAllItem = async(dispatch) => {
    dispatch(getDishStart())
    dispatch(getDrinkStart())
    try {
        const dishs = await axios.get("http://localhost:5000/api/dishs")
        dispatch(getDishSuccess(dishs.data))
        const drinks = await axios.get("http://localhost:5000/api/drinks")
        dispatch(getDrinkSuccess(drinks.data))
    }catch (err) {
        dispatch(getDishFailed())
        dispatch(getDrinkFailed())
        console.log("Get Dishs Falied!")
    }
}
