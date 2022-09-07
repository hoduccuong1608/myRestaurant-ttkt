import {useSelector} from 'react-redux'
import { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { Infor } from './Infor'
import Recharge from './Recharge'
import UpdateInfor from './UpdateInfor'
import { inforUser } from '../../redux/selector'

function UserProfile() {
  const currentUser = useSelector(inforUser)
  const [edit, setEdit] = useState(false)
  const [recharge, setRecharge] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false);

  // console.log(moment(currentUser.DoB).utc().format('MM/DD/YYYY'))
  // console.log(currentUser)

  const handleEdit=() => {
    setEdit(true)
  }
  const handleRecharge = () => {
    setRecharge(true)
  }
  const handleUpdate = () => {
    setEdit(false)
    setIsConfirm(false)
  }
  const handleMoney = () => {
    setRecharge(false)

  }
  // console.log(recharge)
  if(currentUser == null) {
    return <Navigate to="/login" />}
  else{
    return (
      <div className="inline-block w-full mt-16 h-screen  bg-gray-50 ">
        {(!edit ) ?
            <Infor/> 
            : ( isConfirm ? 
            <UpdateInfor handleUpdate={handleUpdate} isConfirm={isConfirm} />: 
            <ConfirmPassword setIsConfirm = {setIsConfirm}/>)}
        {recharge && <Recharge handleMoney={handleMoney} />}
        <div className='mx-10'>
          <div className=' flex flex-row w-[1000] items-center justify-center gap-x-6 bg-gray-50'>
            {!edit && !recharge && <NavLink className='mt-4 p-2 w-20 text-center  bg-blue-800 text-white rounded border-purple-800 border-2 cursor-pointer'
            to = '/profile/edit'
            onClick={handleEdit}
            >Edit</NavLink>}

            { !recharge && !edit && <NavLink className='mt-4 p-2 w-20 text-center rounded border-purple-800  bg-blue-800 text-white border-2 cursor-pointer'
            to = '/profile/recharge'
            onClick={handleRecharge}
            >Recharge</NavLink> }
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
      
    )}
   }
   
    function ConfirmPassword(props) {
    const setIsConfirm = props.setIsConfirm
    const [inputPassword, setInput] = useState()
    const currentUser = useSelector((state) => state.login.login?.currentUser)

    // confirm user
    const  handleConfirm = (e) => {
      e.preventDefault();
      // console.log('touched', inputPassword)
      inputPassword == currentUser.PassWord ? (setIsConfirm(true)) : alert('Password wrong!')
      }


    return (
      <div className='w-[1000] mx-10 items-center sm:justify-center sm:pt-0 bg-gray-50'>
        <div className='mt-4 flex flex-row'>
          <label name='password' className="block p-2 text-sm font-medium text-gray-700 undefined min-w-[110px]">
            Password:
          </label>
          <input type = 'password'
            id='password'
            className="block p-2 w-full text-sm text-gray-800  bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40 "
            onChange={e => setInput(e.target.value)}
          />
        </div>
        
        <div
          onClick={handleConfirm}
          className='mt-10 p-2 w-20 text-center  bg-blue-800 text-white rounded border-purple-800 border-2 cursor-pointer'>Confirm
        </div>
      </div>
    )
   }
   export default UserProfile;