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
    const dispatch = useDispatch()
    //Confirm Password
    const isConfirm = (password === cpassword )? true: false;

    // Register
    const handleRegister = (e) => {
        e.preventDefault();
        let infor = {name, email, password, dob}
        registerUser(infor, dispatch, navigate)
    }

     return (
      
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
              <div className="mt-28">
                  <a href="/">
                      <h3 className="text-4xl font-bold text-gray-800">
                          Hi!
                      </h3>
                  </a>
              </div>
              <div className="w-full p-6 mb-10 m-auto bg-white rounded-md shadow-xl shadow-gray-800 border-2 border-indigo-900 lg:max-w-xl">
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
                                  name="name"
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
                              <input
                                  type="email"
                                  name="email"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="on"
                                  onChange={(e)=> setEmail(e.target.value)}
                              />
                          </div>
                      </div>
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
                                  name="password"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="current-password"
                                  onChange={(e)=> setPassword(e.target.value)}
                              />
                          </div>
                      </div>
                      <div className="mt-4">
                          <label
                              htmlFor="dob"
                              className="block text-sm font-medium text-gray-700 undefined"
                          >
                              Confirm Password
                          </label>
                          <div className="flex flex-col items-start">
                              <input
                                  type="password"
                                  name="dob"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="current-password"
                                  onChange={(e)=> SetCPassword(e.target.value)}
                                  style={isConfirm ? {} : {borderColor: 'red'}}
                              />
                          </div>

                      </div>
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
                                  name="dob"
                                  className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  autocompletetype="off"
                                  onChange={(e)=> setDoB(e.target.value)}
                              />
                          </div>
                      </div>

                      <a
                          href="#"
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