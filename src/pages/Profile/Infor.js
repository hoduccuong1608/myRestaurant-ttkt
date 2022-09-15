import moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../api/apiUpdateUser";
import { useState } from 'react'
import {inforUser} from '../../redux/selector'
export default function Infor() {
    const dispatch = useDispatch()
    const currentUser = useSelector(inforUser)
    const [name, setName] = useState(currentUser?.Name)
    const [dob, setDoB] = useState(moment(currentUser?.DoB).format('YYYY-MM-DD'))
    // console.log(name)
    // console.log(dob)
    const handleSave =() =>{
        let data = {id: currentUser.UserID, name, dob}
        updateUser(data, dispatch)
        // console.log(data.password == null)
    }
    if(currentUser) {
    return (
        <div className="bg-white w-full min-h-screen">
            <div className='mx-5'>
                <div className="flex flex-col gap-y-0 h-28 justify-center border-b border-gray-200">
                    <div className=" text-xl ">My profile</div>
                    <div className=" text-gray-600">Manage profile information for account security</div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-x-6'>
                        <div className='flex flex-col min-w-[150px] items-end'>
                            <div className='pt-6'>Name:</div>
                            <div className='pt-9'>Email:</div>
                            <div className='pt-9'>Date of birth:</div>
                            <div className='pt-9'>Total Money:</div>
                            <div className='pt-9'>Address:</div>
                            
                        </div>
                        <div className='basis-2/5 flex flex-col  items-start'>
                            <div className='pt-4 w-full'><input className='p-2 w-72 border border-gray-500 rounded-md' type='text' value={name} onChange={e => setName(e.target.value)}/></div>
                            <div className='pt-6'>{currentUser.Email}</div>
                            <div className='pt-7 '><input type='date' className='p-2 w-72 border border-gray-500 rounded-md' value={dob} onChange={e => setDoB(moment(e.target.value).format('YYYY-MM-DD'))}/></div>
                            <div className='pt-6 text-red-600'>{currentUser.TotalMoney} VND</div>
                            <div className='pt-9'>{currentUser.Address == null ? 'Null' : currentUser.Address}</div>
                            <div className='mt-10'>
                                <div className=' bg-orange-500 text-white rounded-md px-6 py-3 cursor-pointer' onClick={handleSave}>Save</div>
                            </div>
                        </div>
                        <div className='basis-2/5 max-w-xs flex flex-col gap-y-8 items-center justify-center ml-10 border-l border-gray-200'>
                            <div className=''><img className='rounded-full w-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt="" /></div>
                            <div className='w-34 p-2 bg-blue-500 text-white rounded-md text-center cursor-pointer'> Choose photo</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
};
