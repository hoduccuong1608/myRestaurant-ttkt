import {inforUser} from '../../redux/selector'
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { updateUser } from "../../api/apiUpdateUser";

export default function ChangePassword(params) {
    const dispatch = useDispatch()
    const currentUser = useSelector(inforUser)
    const [password, setPassword] = useState()
    const [cpassword, setCPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [isKeyUp, setIsKeyUp] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false)
    // confirm passs
    const checkConfirmPassword = ()=> {
        setIsKeyUp(true)
        setIsConfirm(password === cpassword)
    }

    const handleUpdate = () => {
        let data = {id: currentUser.UserID, password, newpassword}
        updateUser(data, dispatch)
    }
    return (
        <div className="bg-white w-full min-h-screen">
            <div className='mx-5'>
                <div className="flex flex-col gap-y-0 h-28 justify-center border-b border-gray-200">
                    <div className=" text-xl ">Change Password</div>
                    <div className=" text-gray-600">For account security, please do not share your password with others</div>
                </div>
                <div className='mt-5 flex flex-col'>
                    <div className='flex flex-row gap-x-6'>
                        <div className=' flex flex-col min-w-[250px] items-end'>
                            <div className='pt-7'>Current password:</div>
                            <div className='pt-10'>Confirm current password:</div>
                            {!isConfirm && isKeyUp && <div className="mt-4"></div>}
                            <div className='pt-12'>New current password:</div>
                            
                        </div>
                        <div className=' flex flex-col  items-start'>
                            <div className='flex flex-row pt-4 w-full'>
                                <input type='password' className='p-2 w-72 border border-gray-500 rounded-md'   onChange={e => setPassword(e.target.value)}/>
                                <div className='text-gray-500 text-base mt-2 ml-6 cursor-pointer'>Forget Password?</div>
                            </div>
                            <div className='pt-6'>
                                <input type='password' className='p-2 w-72 border border-gray-500 rounded-md'   onChange={e => setCPassword(e.target.value)}
                                onKeyUp={checkConfirmPassword}
                                />
                                {!isConfirm && isKeyUp && <div className="text-red-600 text-sm">Confirm password wrong</div>}
                            </div>
                            
                            <div className='pt-7 '>
                                <input type='password' className='p-2 w-72 border border-gray-500 rounded-md' onChange={e => setNewPassword(e.target.value)}/>
                                </div>
                            <div className='mt-10'>
                                <div className=' bg-orange-500 text-white rounded-md px-6 py-3 cursor-pointer' onClick={handleUpdate}>Update</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
