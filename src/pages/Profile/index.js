import {FaUserAlt} from 'react-icons/fa'
import {FaClipboardList, FaRegBell} from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
const navs = ['Profile','Address','Change Password']
const link = ['profile','address', 'changePassword', 'purchaseOrder', 'notify']
export default function Profile ({ children }) {
    const [active, setActive] = useState('profile');
    const [isProfile , setIsProfile] = useState(true)
    return (
        <div className="inline-block w-full min-h-screen">
            <div className="mt-16 mx-10">
                <div className="flex flex-row justify-start">
                    <div className="basis-1/5 py-4 flex flex-col bg-white border shadow-xl items-center">
                        <div className="mt-4 w-5/6 border-b border-b-gray-200 pb-5 text-center text-2xl font-semibold cursor-pointer">Profile</div>
                        <NavLink className="w-5/6 py-4 flex flex-row items-center"
                        to='/profile'
                        onClick={() => {
                            setActive('profile')
                            setIsProfile(true)
                        }}
                        >
                            <div className='px-4'> <FaUserAlt color={isProfile ? '#000099': '#595959'}/></div>
                            <div className='text-gray-400 cursor-pointer'
                            style={isProfile ? {color: ' #1a1a1a'}: {}}
                            >My Account</div>
                        </NavLink>
                        {isProfile && <div className='w-5/6 flex flex-col text-gray-400 '>
                            {
                                navs.map((nav, index) => {
                                    return (
                                        <NavLink key={index} className="py-4 cursor-pointer rounded-md text-center"
                                        to={link[index] === 'profile' ?'':`${link[index]}`}
                                        style={active === link[index] ? {backgroundColor: '#4B5563', color: '#fff'} : {}}
                                        onClick={() => {setActive(link[index])}}
                                        
                                        >{nav}</NavLink>
                                    )
                                })
                            }
                            
                        </div>}
                        <NavLink className="w-5/6 py-4 flex flex-row items-center cursor-pointer"
                        to='purchaseOrder'
                        style={({ isActive }) => ({
                            backgroundColor: isActive && !active ? '#4B5563' : '',
                            borderRadius: isActive ? '8px 8px 8px 8px' : '',
                            color: isActive ? "#fff" : "",
                          })}
                        onClick={()=> {
                            setActive(false)
                            setIsProfile(false)
                        }}
                        >
                            <div className='px-4'><FaClipboardList color='#3385ff'/></div>
                            <div className='text-gray-400 '>Purchase order</div>
                        </NavLink>
                        <NavLink className="w-5/6 py-4 flex flex-row items-center cursor-pointer"
                        to='notify'
                        style={({ isActive }) => ({
                            backgroundColor: isActive && !active  ? '#4B5563' : '',
                            borderRadius: isActive ? '8px 8px 8px 8px' : '',
                            color: isActive ? "#fff" : "",
                          })}
                        onClick={()=> {
                            setActive(false)
                            setIsProfile(false)
                        }}
                        >
                            <div className='px-4'><FaRegBell color='#ffbb33'/></div>
                            <div className='text-gray-400'>Notify</div>
                        </NavLink>
                    </div>
                    <div className="basis-4/5">{ children }</div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}