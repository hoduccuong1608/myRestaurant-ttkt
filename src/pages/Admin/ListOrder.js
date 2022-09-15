import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { listOrderSelector, isBuyItems, isCancel } from "../../redux/selector"
import { getAllOrder, refundMoney } from '../../api/apiAdmin'
import { cancelItems } from "../../api/apiCart";

var moment = require('moment-timezone');

export default function ListOrder() {
    const dispatch = useDispatch()
    const listOrder = useSelector(listOrderSelector)
    let isBuyed = useSelector(isBuyItems)
    let isCancelled = useSelector(isCancel)

    const handleAccess =(e) => {
        e.preventDefault();
        let index = JSON.parse(e.currentTarget.dataset.index);
        let id = JSON.parse(e.currentTarget.dataset.id);
        let data = {
            data: {
                id : id ,
                index2 : index,
                status: 'Doing'
            }
        }
        cancelItems(data, dispatch)
    }
    const handleReceive =(e) => {
        e.preventDefault();
        let index = JSON.parse(e.currentTarget.dataset.index);
        let id = JSON.parse(e.currentTarget.dataset.id);
        let data = {
            data: {
                id : id ,
                index2 : index,
                status: 'Received'
            }
        }
        cancelItems(data, dispatch)
    }

    const handleCancel=(e) => {
        e.preventDefault();
        let index = JSON.parse(e.currentTarget.dataset.index);
        let id = JSON.parse(e.currentTarget.dataset.id);
        let userID = JSON.parse(e.currentTarget.dataset.userid);
        let money = JSON.parse(e.currentTarget.dataset.money);

        let data = {
            data: {
                id : id ,
                index2 : index,
                status: 'Out of stock'
            }
        }
        cancelItems(data, dispatch)
        data = {
            id: userID,
            money: money
        }
        refundMoney(data, dispatch)
    }
    useEffect(()=> {
        getAllOrder(dispatch)
    },[isCancelled])

    return (
        <div className="inline-block w-full">
            <div className="h-20 w-full font-semibold bg-white border border-gray-300 rounded-md flex flex-row items-center">
                <div className="basis-1/12 text-center">ID</div>
                <div className="basis-1/12 text-center">UserID</div>
                <div className="basis-1/12 text-center">Table</div>
                <div className="basis-7/12 text-center flex flex-row items-center">
                    <div className="basis-5/12">Name</div>
                    <div className="basis-1/12">Amount</div>
                    <div className="basis-2/12">Status</div>
                    <div className="basis-4/12">Action</div>
                </div>
                <div className="basis-2/12 text-center">Time Order</div>
            </div>
            <div className="mt-4 h-screen w-full flex flex-col items-center  text-xl">
                {
                    listOrder.map((items, index) => {
                    if(items.List.length > 0)
                    return (
                            <div key={index} className="mt-3 h-auto w-full bg-white border border-gray-300 rounded-md flex flex-row items-center">
                                <div className="basis-1/12 text-center">{items.ID}</div>
                                <div className="basis-1/12 text-center">{items.UserID}</div>
                                <div className="basis-1/12 text-center">{items.TableID}</div>
                                <div className="basis-7/12 text-center flex flex-col">
                        {
                        items.List.map((product, index1) => {
                            return (
                                <div key={index1} className="w-full my-1 rounded-md h-16 border border-orange-500 flex flex-row items-center justify-start text-base">
                                    <div className="basis-5/12">{product.name}</div>
                                    <div className="basis-1/12">{product.amount}</div>
                                    <div className="basis-2/12 mr-2">{product.status}</div>
                                    {product.status == 'Waiting' ? <div className="basis-2/12 bg-blue-500 rounded py-2 text-white mr-2 cursor-pointer"
                                    data-index = {index1}
                                    data-id = {items.ID}
                                    onClick={handleAccess}>Access</div> : <></>}
                                    {product.status == 'Waiting' ? <div className="basis-2/12 bg-red-500 rounded py-2 text-white mr-2 cursor-pointer"
                                    data-index = {index1}
                                    data-id = {items.ID}
                                    data-userid = {items.UserID}
                                    data-money = {product.amount * product.price}
                                    onClick={handleCancel}>Cancel</div> : <></>}
                                    {product.status == 'Doing' ? <div className="basis-2/12 bg-blue-500 rounded py-2 text-white mr-2 cursor-pointer"
                                    data-index = {index1}
                                    data-id = {items.ID}
                                    data-userid = {items.UserID}
                                    data-money = {product.amount * product.price}
                                    onClick={handleReceive}>Received</div> : <></>}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="basis-2/12 text-center">{moment(items.time_start).format('YYYY/MM/DD HH:mm:ss')}</div>
                            </div>
                )
                    })
                }
            </div>
        </div>
    )
};
