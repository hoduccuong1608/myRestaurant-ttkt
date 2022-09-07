import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { inforUser } from '../../redux/selector'
import {rechargeUser} from '../../api/apiUpdateUser'
export default function Recharge(props) {
    const [money, setMoney] = useState('0')
    const currentUser = useSelector(inforUser)
    const handleMoney = props.handleMoney
    const dispatch = useDispatch()
    const handleSend = () => {
        let data = {
            id: currentUser.UserID,
            money: money
        }
        rechargeUser(data, dispatch)
        handleMoney()
    }
    return (
        <div className=" w-[1000] mx-10 items-center sm:justify-center sm:pt-0 bg-gray-50">
            <div className="w-full p-6 mb-10 m-auto bg-white rounded-md border-2 border-indigo-900 lg:max-w-xl">
                      <div className='flex flex-row'>
                         <label htmlFor='money' className="block text-sm font-medium text-gray-700 undefined sm:min-w-[160px] w-[130px] ">Amount of money</label>
                          
                            <input className="pl-3 rounded-md placeholder:text-right border border-indigo-900 w-full h-10 focus:outline-none focus:ring focus:ring-opacity-40" type='text' id="money" name="money" placeholder="VND" 
                            onChange={(e)=> setMoney(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-row w-[1000] items-center justify-center gap-x-6">
                        <button className='mt-4 p-2 w-20 text-center bg-blue-800 text-white rounded border-purple-800 border-2 cursor-pointer'
                        onClick={handleSend}
                        >Send</button>
                        <a className='mt-4 p-2 w-20 text-center bg-blue-800 text-white  rounded border-purple-800 border-2 cursor-pointer'
                        href = '/profile'
                        >Return</a>
                    </div>
        </div>
    )
}