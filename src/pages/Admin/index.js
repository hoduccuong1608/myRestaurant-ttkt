import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { inforUser } from '../../redux/selector'
import {AiFillBell,} from 'react-icons/ai'
import {SiAirtable,} from 'react-icons/si'
import {FaUserCircle, FaClipboardList, FaProductHunt, FaUsers} from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'
import navAdmin from "../../util/data";

function Admin() {
  const admin = useSelector(inforUser)
  const location = useLocation()
  const navAd = navAdmin()
  const titleLow =  location.pathname.slice(7)
  const navigate = useNavigate()
  
  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const title =jsUcfirst(titleLow)

  useEffect(()=>{
    if(location.pathname = '/admin') {
    navigate('/admin/listOrder' , {replace: true})
  }
},[])
  if(admin.Admin !== 1) {
    return <Navigate to="/" />;
  } 
  if(navAd.length > 0){
    return (
      <div className=" inline-block w-screen min-h-screen">
        <div className="flex flex-row mx-10  justify-center gap-4">
          <div className="basis-1/6 w-[230px] bg-white min-h-screen flex flex-col items-center border border-gray-200 shadow-2xl rounded-md  ">
            <div className="h-16 w-52 p-4 text-center text-2xl font-semibold border-b border-gray-300">Admin</div>
            {
              navAd.map((nav, index) => {
                return (
                  <NavLink key={index} className="w-5/6 mt-2 p-4 flex flex-row  items-center gap-4 cursor-pointer"
                  to={nav.link}
                  data-value={nav.name}
                  // onClick={(e) => setTitle(e.currentTarget.dataset.value)}          
                  style={({ isActive }) => (
                  isActive ? {backgroundColor: '#4B5563', borderRadius: '8px 8px 8px 8px', color:  "#fff"} : {}
              )}
            >
              {nav.name == 'List Order' && <FaClipboardList color='#3385ff'/>}
              {nav.name == 'Product' &&  <FaProductHunt color='#ff751a' />}
              {nav.name == 'Users' && <FaUsers color='#ff1a1a' />}
              {nav.name == 'Table' &&  <SiAirtable color='#47d147'/>}
            <div className="">{nav.name}</div>
            </NavLink>
                )
            })
          }
          </div>
          <div className="basis-5/6 w-full flex flex-col">
            <div className="h-16 flex flex-row justify-between items-center">
             <div className="">{title}</div>
            <div className="flex flex-row items-center gap-x-5">
              <div className=""><ImMail4 color="#1a75ff" size='25px'/></div>
              <div className=""><AiFillBell color="#ffcc66" size='25px'/></div>
              <div className=""><FaUserCircle size='25px'/></div>
            </div>
          </div>
          <div className="border-l"><Outlet/></div>
        </div> 
        </div>
      </div>
      
    )}
   }
   
   export default Admin;