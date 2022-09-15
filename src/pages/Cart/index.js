import { ListCart } from "./ListCart";
import { ListBooked } from "./ListBookItems";
import { useState, useEffect } from "react";
import { AiFillCheckCircle} from 'react-icons/ai';
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getCart, bookItem, deleteItem } from "../../api/apiCart";
import { inforUser, listCart, isAddedItems, isDeleteItems, isBuyItems, selectorCart } from '../../redux/selector'
import {rechargeUser} from '../../api/apiUpdateUser'
    
function Cart() {
    const {id} = useParams();
    const dispatch = useDispatch()
    const carts = useSelector(listCart)
    const listChecked = useSelector(selectorCart)
    const currentUser = useSelector(inforUser)
    const isAdded = useSelector(isAddedItems)
    const isDeleted = useSelector(isDeleteItems)
    const isBought = useSelector(isBuyItems)
    const [totalMoney,setTotalMoney] = useState(0)
    const [amountPro,setAmountPro] = useState(0)
    const [isCart, setIsCart] = useState(true)
    const [isSelectAll, setSelectAll] = useState(false)

    let sum = 0
    let amount = 0

    // TotalMoney
    useEffect(() =>{
        if(listChecked.length > 0 && !isSelectAll) {
            for(let check of listChecked) {
                sum += Number(check.price)*Number(check.amount)
                amount ++
            }
            setTotalMoney(sum)
            setAmountPro(amount)

    } else if(isSelectAll) {
        for( let item of carts) {
            sum += item.price*item.amount
            amount++
        }
        setTotalMoney(sum)
        setAmountPro(amount)
    } else if(!isSelectAll && listChecked == null) {
        setTotalMoney(0)
        setAmountPro(0)
    }
    },[listChecked, isSelectAll, carts])
    // buying
    const handleBuy = () => {

        if(isSelectAll) {
            let listOrder = carts.map((items) => {
                return {...items, status: 'Waiting'}
            })
            if(currentUser.TotalMoney >= totalMoney) {
            let data = {
                id: id,
                money: 0-totalMoney
            }
            rechargeUser(data, dispatch)
            bookItem({
                userID : id,
                list: listOrder,
            }, dispatch)
            setSelectAll(false)
        } else {
            alert('Tài khoản không đủ tiền')
        }
        }
        else if(!isSelectAll && listChecked.length > 0) {
            let listOrder = listChecked.map((items) => {
                return {...items, status: 'Waiting'}
            })

            if(currentUser.TotalMoney >= totalMoney) {
            let data = {
                id: id,
                money: 0-totalMoney
            }
            rechargeUser(data, dispatch)
                bookItem({
                    userID : id,
                    list: listOrder,
                    chargeMoney: totalMoney
                }, dispatch)
            } else {
                alert('Tài khoản không đủ tiền')
            }
            } 
    }
// delete all
    const handleDeleteAll= () => {
        if(isSelectAll) {
            let data = {
                id : id ,
                cart : []
            }
            deleteItem(data, dispatch)
        }
    }
    // get Cart
    useEffect(()=> {
        getCart(id, dispatch)
    },[isAdded, isDeleted])


    return (
      <div className=" inline-block my-28 min-h-screen w-full">
        <div className="flex flex-row mx-10 text-center h-10 leading-10">
            <div className="basis-1/2 border  bg-white cursor-pointer"
            onClick={e => setIsCart(true)}
            style={isCart ? { backgroundColor: '#1aa3ff', color: 'white'}: {}}
            >Cart</div>
            <div className="basis-1/2   bg-white cursor-pointer"
            onClick={e => setIsCart(false)}
            style={isCart ? {}: { backgroundColor: '#1aa3ff', color: 'white'}}
            >Booked</div>
        </div>
        <div className="flex flex-row h-12 leading-12 mx-10 mt-5 text-center bg-white border ">
            <div className="basis-1/3 flex flex-row ">
                {isCart && <input type='checkbox' className="mx-4 scale-150 mr-3 cursor-pointer"
                checked={isSelectAll}
                onChange={e => setSelectAll(e.target.checked)}
                />}
                <div className="ml-10">Product</div>
            </div>
            <div className="basis-1/6">Unit price</div>
            <div className="basis-1/9">Amount</div>
            <div className="basis-1/9">Amount of money</div>
            <div className="basis-1/6">Status</div>
            <div className="basis-1/9">Manipulation</div>
        </div>
        <div className="mx-10">
            {isCart && <ListCart id={id} isSelectAll={isSelectAll} setSelectAll={setSelectAll}/>}
        </div>
        <div className="mx-10">
            {!isCart && <ListBooked id={id} />}
        </div>
        
        {isCart && <div className="h-20 flex flex-row bg-white mt-4 mx-10 text-center text-lg justify-between items-center">
            <div className="basis-1/4 flex flex-row justify-between ">
                <input type='checkbox' className="mx-4 scale-150 mr-3 cursor-pointer" id='checkAll'
                checked={isSelectAll}
                onChange={e => setSelectAll(e.target.checked)}
                />
                <label className="cursor-pointer" htmlFor="checkAll">Select all<span> ({carts.length})</span></label>
                <div className="cursor-pointer text-red-500"
                    onClick={handleDeleteAll}
                >Delete</div>
            </div>
            <div className="flex flex-row items-center justify-end">
                <div className="">Total payment</div>
                <div className="mx-2">({amountPro} Product: )</div>
                <div className="text-red-500"><span>₫</span>{totalMoney}</div>
                <button className="mx-4 w-36 p-3 rounded bg-orange-600 text-white" 
                onClick={handleBuy}
                >Buying</button>
            </div>
        </div>}
        {isBought && <IsBuy/>}
      </div>
    )}
   
   export default Cart;

   const IsBuy = () => {

    return (
        <div className="fixed w-screen top-1/2">
            <div className="flex flex-col justify-center items-center w-40 h-40 border rounded bg-[#000]/70 mx-auto">
                <AiFillCheckCircle size='50px' color="#00e600"/>
                <div className="text-white">Bought</div>
            </div>
        </div>
    )
   }
