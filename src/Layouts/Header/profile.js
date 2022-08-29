import { useState } from "react"

export default function User() {
    const [showProfile, setShowProfile] = useState(false)
    window.onClick = () => {
        setShowProfile(false);
    }
    const setShow = () => {
        setShowProfile(!showProfile);
    }
    function Profile() {
        return (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Log out</a>
            </div>
        )
    }
    return (

        <div className="ml-3 relative">
            <div>
            <button onClick={setShow} type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt=""/>
            </button>
            </div>
            {showProfile && <Profile/>}          
        </div>

        
    )
}