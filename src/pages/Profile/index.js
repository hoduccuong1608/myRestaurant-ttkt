import {FaUserAlt} from 'react-icons/fa'
import {FaClipboardList, FaRegBell} from 'react-icons/fa'
import { FcMoneyTransfer } from 'react-icons/fc'
import { BiEditAlt } from 'react-icons/bi'
import { NavLink, Outlet } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useSelector} from 'react-redux'
import {inforUser} from '../../redux/selector'

const navs = ['Profile','Address','Change Password']
const link = ['profile','address', 'changePassword', 'purchaseOrder', 'notify']
export default function Profile () {

    const [isProfile , setIsProfile] = useState(true)
    const currentUser = useSelector(inforUser)
  
    return (
        <div className="inline-block w-full min-h-screen">
            <div className="mt-16 mx-10">
                <div className="flex flex-row justify-start gap-x-4">
                    <div className="basis-1/5 max-w-[230px] min-w-[230px] py-3 flex flex-col bg-white border shadow-xl items-center rounded-md">
                        <div className="mt-4 w-5/6  flex flex-row items-center border-b border-b-gray-200 pb-5 ">
                            <NavLink onClick={() => {
                                setIsProfile(true)
                            }} to='/account/profile' className='w-1/3 cursor-pointer'>
                                <img className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt="" /></NavLink>
                            <div className='ml-3 flex flex-col '>
                            <div className='text-xl'>{currentUser.Name}</div>
                            <div className='flex flex-row items-center text-sm cursor-pointer'><BiEditAlt color='#8c8c8c'/>
                            <NavLink className='ml-1 text-gray-400'
                            to='/account/profile'
                            onClick={() => {
                                setIsProfile(true)
                            }}
                            >Edit profile</NavLink>
                            </div>
                            </div>
                        </div>
                        <NavLink className="w-5/6 py-4 flex flex-row items-center"
                        to='/account/profile'
                        onClick={() => {
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
                                        <NavLink key={index} className="w-100% py-4 cursor-pointer rounded-md text-center"
                                        to={`${link[index]}`}
                                        style={({ isActive }) => (
                                            isActive ? {backgroundColor: '#4B5563', borderRadius: '8px 8px 8px 8px', color:  "#fff"} : {}
                                        )}
                                        >{nav}</NavLink>
                                    )
                                })
                            }
                            
                        </div>}
                        <NavLink className="w-5/6 py-4 flex flex-row items-center cursor-pointer"
                        to='purchaseOrder'
                        style={({ isActive }) => (
                            isActive ? {backgroundColor: '#4B5563', borderRadius: '8px 8px 8px 8px', color:  "#fff"} : {}
                        )}
                        onClick={()=> {
                            setIsProfile(false)
                        }}
                        >
                            <div className='px-4'><FaClipboardList color='#3385ff'/></div>
                            <div className='text-gray-400 '>Purchase order</div>
                        </NavLink>
                        <NavLink className="w-5/6 py-4 flex flex-row items-center cursor-pointer"
                        to='notify'
                        style={({ isActive }) => (
                            isActive ? {backgroundColor: '#4B5563', borderRadius: '8px 8px 8px 8px', color: '#ffffff'} : {}
                        )}
                        onClick={()=> {
                            setIsProfile(false)
                        }}
                        >
                            <div className='px-4'><FaRegBell color='#ffbb33'/></div>
                            <div className='text-gray-400'>Notify</div>
                        </NavLink>
                        <NavLink className="w-5/6 py-4 flex flex-row items-center cursor-pointer"
                        to='recharge'
                        style={({ isActive }) => (
                            isActive ? {backgroundColor: '#4B5563', borderRadius: '8px 8px 8px 8px', color:  '#fff'} : {}
                        )}
                        onClick={()=> {
                            setIsProfile(false)
                        }}
                        >
                            <div className='px-4'><FcMoneyTransfer color='#ffbb33'/></div>
                            <div className='text-gray-400'>Recharge</div>
                        </NavLink>
                    </div>
                    <div className="basis-4/5 border border-gray-200 shadow-xl"><Outlet/></div>
                    
                </div>
            </div>
        </div>
    )
}