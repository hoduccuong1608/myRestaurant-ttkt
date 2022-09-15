import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function User() {
    const [showProfile, setShowProfile] = useState(false)
    const setShow = () => {
        setShowProfile(true);
    }
    const setOff = () => {
        setShowProfile(false);
    }
    return (

        <div className="" onMouseOver={setShow} onMouseOut={setOff}>
            <button  type="button" className="bg-gray-800 flex text-sm rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt=""/>
            </button>
            {showProfile && <Profile/>}          
        </div>

        
    )
}
const  Profile = () => {
    const logOut = ()=> {
        localStorage.removeItem('profile');
    }
    return (
        <div className='absolute flex flex-col items-end right-0'
        >
            <div className="w-6">
                <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-white border-r-8 border-r-transparent shadow-sm shadow-inherit"></div>
            </div>
            <div className="w-28 flex flex-col items-center gap-2 border border-stone-300 rounded bg-white">
                <NavLink className="py-2 px-3 border-b border-gray-300" to='/account/profile'>Profile</NavLink>
                <NavLink className="pb-2 border-b px-3 border-gray-300" to='/#'>Setting</NavLink>
                <NavLink className="pb-2 " to="/login" onClick={logOut}>Log out</NavLink>
            </div>
        </div>
    )
}