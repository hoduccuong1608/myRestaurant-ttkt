import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../../api/apiLogin";
import { useDispatch } from "react-redux";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const [isEmail, setIsEmail] = useState(false);
    const [isKeyUp, setIsKeyUp] = useState(false);

    const patternEmail = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/

    // confirm email
    const checkEmail = ()=> {
        setIsKeyUp(true)
        setIsEmail(email.match(patternEmail))
        
    }
    const handleLogin = (e) => {
        e.preventDefault();
        let dataInput = {email, password}

        loginUser(dataInput, dispatch, navigate);
    }

 return (
  <div className="mx-4 sm:mx-20 relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className=" w-full p-6 m-auto h-full  bg-white rounded-md shadow-xl shadow-gray-800 border-2 border-indigo-900 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-800 underline uppercase ">
                   Login
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-indigo-900 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            autocompletetype="off"
                            onChange={(e)=> setEmail(e.target.value)}
                            onKeyUp={checkEmail}
                        />
                        {!isEmail && isKeyUp && <div className="text-red-600 text-sm">Email invalid</div>}
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-indigo-900 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            autocompletetype="current-password"
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-gray-700 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700" type = 'button'
                        onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8  font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <NavLink
                        type="button"
                        className="font-medium text-gray-700 hover:underline"
                        to='/register'
                    >
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
 )
}

export default Login;