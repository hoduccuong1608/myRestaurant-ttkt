import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {inforUser} from '../../redux/selector'
import {rechargeUser} from '../../api/apiUpdateUser'

export default function Recharge(params) {
    const dispatch = useDispatch()
    const currentUser = useSelector(inforUser)
    const [money, setMoney] = useState(0)
    const [valueTrue, setValueTrue] = useState(true)
    const [isKeyUp, setIsKeyUp] = useState(false);

    const checkKeyup = ()=> {
        setIsKeyUp(true)
    }

    const handleRecharge =() => {
        if(isKeyUp && money == 0) {
            setValueTrue(false)
        } else if(isKeyUp && money != 0) {
            setValueTrue(true)
            let data = {
                id: currentUser.UserID,
                money: money
            }
            rechargeUser(data, dispatch)
        }
    }
    return (
        <div className="bg-white w-full min-h-screen">
            <div className='mx-5'>
                <div className="flex flex-col gap-y-0 h-28 justify-center border-b border-gray-200">
                    <div className=" text-xl ">Recharge</div>
                    <div className=" text-gray-600">For account security, please do not share your password with others</div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-x-6'>
                        <div className='basis-1/5 flex flex-col min-w-[150px] items-end'>
                            <div className='pt-6'>Name:</div>
                            <div className='pt-9'>Total Money:</div>
                        </div>
                        <div className='basis-1/5 flex flex-col  items-start'>
                            <div className='pt-6 w-full'>{currentUser.Name}</div>
                            <div className='pt-9 text-red-600'>{currentUser.TotalMoney} VND</div>
                            
                        </div>
                        <div className='basis-2/5 flex flex-col items-start ml-10 border-l border-gray-200'>
                            <label htmlFor='recharge' className='pt-6 ml-10'>Amount of money</label>
                            <input id='recharge' className='ml-10 p-2 mt-6 w-72 border border-gray-500 rounded-md' type='text' 
                            onChange={e=> setMoney(e.target.value)}
                            onKeyUp={checkKeyup}
                            />
                            {!valueTrue && <div className='ml-10 text-red-500'>Invalid amount</div>}
                            <div className='mt-8 ml-10'>
                                <div className=' bg-orange-500 text-white rounded-md px-6 py-3 cursor-pointer' onClick={handleRecharge}>Recharge</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
