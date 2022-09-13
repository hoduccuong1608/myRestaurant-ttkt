import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../api/apiRegister";
import { useDispatch } from "react-redux/es/exports";

export default function Register () {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword,SetCPassword] = useState();
    const [dob, setDoB] = useState();
    const [isEmail, setIsEmail] = useState(false);
    const [isKeyUp, setIsKeyUp] = useState(false);
    const [isKeyUp1, setIsKeyUp1] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false)
    const patternEmail = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/
    const dispatch = useDispatch()
    console.log(dob)
    // confirm email
    const checkEmail = ()=> {
        setIsKeyUp(true)
        setIsEmail(email.match(patternEmail))
        
    }
    //Confirm Password
    const checkConfirmPassword = ()=> {
        setIsKeyUp1(true)
        setIsConfirm(password === cpassword)
    }


    // Register
    const handleRegister = (e) => {
        e.preventDefault();
        let infor = {name, email, password, dob}
        registerUser(infor, dispatch, navigate)
    }

     return (
      
          <div className="mx-8 sm:mx-20 flex flex-col justify-center items-center min-h-screen overflow-hidden  sm:pt-0 bg-gray-50">
              <div className="mt-20 sm:mt-28">
                  <a href="/">
                      <h3 className="text-4xl font-bold text-gray-800">
                          Hi!
                      </h3>
                  </a>
              </div>
              <div className="w-full sm:mb-48 p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-800 border-2 border-indigo-900 lg:max-w-xl">
                  <form>
                      <div>
                          <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 undefined"
                          >
                              Name
                          </label>
                          <div className="flex flex-col items-start">
                              <input
                                  type="text"
                                  id="name"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="on"
                                  onChange={(e)=> setName(e.target.value)}
                              />
                          </div>
                      </div>
                      <div className="mt-4">
                          <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 undefined"
                          >
                              Email
                          </label>
                          <div className="flex flex-col items-start">
                              <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                  type="email"
                                  id="email"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="on"
                                  onChange={(e)=> setEmail(e.target.value)}
                                  onKeyUp={checkEmail}
                              />
                          </div>
                      </div>
                      {!isEmail && isKeyUp && <div className="text-red-600 text-sm">Email invalid</div>}
                      <div className="mt-4">
                          <label
                              htmlFor="password"
                              className="block text-sm font-medium text-gray-700 undefined"
                          >
                              Password
                          </label>
                          <div className="flex flex-col items-start">
                              <input
                                  type="password"
                                  id="password"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="current-password"
                                  onChange={(e)=> setPassword(e.target.value)}
                              />
                          </div>
                      </div>
                      <div className="mt-4">
                          <label
                              htmlFor="confirmPassword"
                              className="block text-sm font-medium text-gray-700 undefined"
                          >
                              Confirm Password
                          </label>
                          <div className="flex flex-col items-start">
                              <input
                                  type="password"
                                  id="confirmPassword"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="current-password"
                                  onChange={(e)=> SetCPassword(e.target.value)}
                                  onKeyUp={checkConfirmPassword}
                              />
                          </div>

                      </div>
                      {!isConfirm && isKeyUp1 && <div className="text-red-600 text-sm">Confirm PassWord wrong</div>}
                      <div className="mt-4">
                          <label
                              htmlFor="dob"
                              className="block text-sm font-medium text-gray-700 undefined"
                          >
                              Date of birth
                          </label>
                          <div className="flex flex-col items-start">
                              <input
                                  type="date"
                                  id="dob"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="off"
                                  onChange={(e)=> setDoB(e.target.value)}
                              />
                          </div>
                      </div>

                      <a
                          href="/#"
                          className="text-xs text-gray-700 hover:underline"
                      >
                          Forget Password?
                      </a>
                      <div className="flex items-center mt-4">
                          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700"
                          onClick={isConfirm ? handleRegister : () =>{alert('Xác nhận mật khẩu sai')}} type="button">
                              Register
                          </button>
                      </div>
                  </form>
                  <div className="mt-8 font-light text-center text-grey-700">
                  {" "}Already have an account?{" "}
                      <span>
                          <NavLink className="font-medium text-gray-700 hover:underline" 
                          to='/login'
                          >  
                              Login
                          </NavLink>
                      </span>
                  </div>
                  
              </div>
          </div>
     )
}