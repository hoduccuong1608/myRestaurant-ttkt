import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "../pages/Login/loginSlice";

export const loginUser = async(user,dispatch, navigate) => {
    dispatch(loginStart());
    
    try {
        const response = await axios.post("http://localhost:5000/api/login",user)
        dispatch(loginSuccess(response.data))
        if(response.data[0].admin === 1 ) {
            navigate('/admin')
        }
        // console.log(response.data[0])
        navigate('/')
        localStorage.setItem("profile", JSON.stringify(response.data[0]));

    }catch (err) {
        dispatch(loginFailed())
        alert('Email, password are wrong');
    }
}
// const requestOptions = {
        //     method: 'POST',
        //     headers: { "Content-Type" : 'application/json' },
        //     credentials: 'omit',
        //     body: JSON.stringify(dataInput)
        // };
        // try {
        //     const response = await fetch('http://localhost:5000/api/login', requestOptions)
        //     const data = await response.json();
        //     sessionStorage.setItem('profile', data);
        //     navigate(-1);
            
        // } catch(err) {
        //     console.log(err);
        //     alert('Email, password are wrong');
        //   }