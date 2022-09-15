import { useDispatch, useSelector } from "react-redux"
import { listBooked, isCancel} from '../../redux/selector'
import { getListBooked, cancelItems } from "../../api/apiCart";
import { useEffect } from "react";
import {rechargeUser} from '../../api/apiUpdateUser'
var moment = require('moment-timezone');

export const ListBooked = (props) => {
    const id =props.id
    const dispatch = useDispatch()
    const isCanceled = useSelector(isCancel)
    // console.log(isCanceled)
    //get list booked
    useEffect(()=> {
        getListBooked(id, dispatch)
    },[isCanceled])

    const listBook = useSelector(listBooked).map((items) =>{
        return items.List
    })
    let lists = listBook.flat()
    // console.log(listBook)
    
    const listIndex = useSelector(listBooked).map((items1, index1) =>{
        let index = items1.List.map((items2, index2) => {
            let time = moment(items1.time_start).format('YYYY/MM/DD HH:mm:ss')
            let id = items1.ID
            return {id, index1, index2, time, status: 'Cancelled' }
        })
        return index
    })
    let arrIndex = listIndex.flat()
    // console.log(arrIndex)
    
    const handleCancel = (e) => {
        e.preventDefault();
        let index = JSON.parse(e.currentTarget.dataset.index);
        let money = JSON.parse(e.currentTarget.dataset.money);
        let data = {
            data : index
        }
        cancelItems(data, dispatch)
         data = {
            id: id,
            money: money
        }
        rechargeUser(data, dispatch)
    }

    const handleDelete =() => {

    }
    return (
        <div className="flex flex-col min-h-screen">
            {
                lists.map((list, i) => {
                    return (
                        <div className="flex flex-row bg-white border text-center h-24 items-center mt-4 text-lg" key={i}>
                            <div className="basis-1/3 flex flex-row items-center">
                                <img src={list.urlImg} className= 'mx-6 max-h-20 aspect-[16/10] border-2 border-red-500 rounded'/>
                                <div className='ml-4'>{list.name}</div>
                            </div>
                            <div className="basis-1/6 text-[#ee4d2d]"><span>₫</span>{list.price}</div>
                            <div className="basis-1/9 flex flex-row justify-center items-center">
                                
                                <span className="text-base px-2 border border-y-stone-300 ">{list.amount}</span>
                            </div>
                            <div className="basis-1/9 text-[#ee4d2d]"><span>₫</span>{list.amount * list.price }</div>
                            <div className="basis-1/6">{list.status}</div>
                            <div className="basis-1/9 ">
                                {(list.status == 'Waiting'  || list.status == 'Out of stock') &&<button className='border border-gray-500 p-2 rounded bg-red-600 text-white' data-index={JSON.stringify(arrIndex[i])}
                                data-money = {list.amount * list.price }
                                onClick={handleCancel}
                                >{list.status == 'Waiting' ? 'Cancel' : 'Delete'}</button>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}