import {BsFillCartCheckFill, BsFillXSquareFill, BsList, BsEmojiSunglasses} from 'react-icons/bs';
import {NavLink, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import MobileNav from './mobile';
import User from './profile';
import ToLogin from './login';

const navs = ['home','menu','book']

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState('home');
    const navigate = useNavigate();
    const token = localStorage.getItem('profile')
    const [isLogined, setIsLogined] = useState(!token ? false : true); 
    const currentUser = useSelector((state) => state.login.login.currentUser)
    // console.log(currentUser)

    useEffect(() => {
        setIsLogined(!token ? false : true);
    },[currentUser])

    // tologin
    const setLogin=() => {
        navigate('/login')
    }
    const setMobile = () => {
        setIsMobile(!isMobile);
    }
return (
            <div className='bg-gray-900 fixed w-screen z-50'>
                <div className='w-100% mx-auto sm:px-6 lg:px-8 border-b border-b-stone-300'>
                    <div className='relative flex items-center h-16  '>
                        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                            <button onClick={() => setMobile(!isMobile)} type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' aria-controls="mobile-menu" aria-expanded="false">
        
                            <span className="sr-only">Open main menu</span>
                            { !isMobile ? <BsList size={'24px'} /> : <BsFillXSquareFill size={'24px'}/>}
                            </button>
                        </div>
                        <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className="flex-shrink-0 flex items-center ">
                                <a href="/" className="block lg:hidden h-8 w-auto cursor-pointer" ><BsEmojiSunglasses size={'34px'} color="#e9c46a"/></a>
                                <a href="/" className="hidden lg:block h-8 w-auto cursor-pointer" ><BsEmojiSunglasses size={'34px'} color="#e9c46a"/></a>
                                <div className="text-2xl text-amber-300 ml-5 cursor-pointer ">Summer</div>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                            
                            { navs.map(nav => (
                            <NavLink  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase cursor-pointer" key={nav}
                            style={({ isActive }) => (
                                isActive ? {backgroundColor: '#4B5563', color:  "#fff"} : {}
                                )}
                            onClick={() => {setActive(nav)}}
                            to={`/${nav}`}
                            >{nav}
                            </NavLink>
                            ))}
                            </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <NavLink type="button" className="hover:bg-gray-600  p-1 rounded-full hover:outline-none  hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-white mr-8 cursor-pointer"
                            to={currentUser ? `/cart/${currentUser.UserID}` : `/login`}
                            style={({isActive}) => (
                                isActive ? {background: '#4B5563'} : {}
                            )}
                            >
                                {/* cart */}
                            <BsFillCartCheckFill size={"25px"} color="#e9c46a"/>
                            </NavLink>
                            { !isLogined ? <ToLogin clickSign={setLogin}/> : <User/>}
                        </div>
                    </div>
                </div>
                { isMobile &&< MobileNav props={{setActive, active}}/>}
                
            </div>
    
)
}
export default Header;