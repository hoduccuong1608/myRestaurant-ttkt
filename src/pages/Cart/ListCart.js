import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkSelector, getIndex, updateAmount,  } from './cartSlice'
import {BsCaretLeftFill, BsCaretRightFill} from 'react-icons/bs'
import { listCart, isDeleteItems} from '../../redux/selector'
import { deleteItem } from "../../api/apiCart";

export const ListCart = (props) => {
    const carts = useSelector(listCart)
    const id = props.id
    const isDeleted = useSelector(isDeleteItems)
    const isSelectAll = props.isSelectAll
    const setSelectAll = props.setSelectAll
    const dispatch = useDispatch()
    const [listChecked , setChecked] = useState([])

    // console.log(listChecked)
    const incrementAmount = (e) => {
        e.preventDefault();
        let index = e.currentTarget.dataset.index;
        dispatch(getIndex(index))
        let amount = e.currentTarget.dataset.amount;
        dispatch(updateAmount(Number(amount)+1))
      }
      const decrementAmount = (e) => {
        e.preventDefault();
        let index = e.currentTarget.dataset.index;
        dispatch(getIndex(index))
        let amount = e.currentTarget.dataset.amount;
        if( Number(amount) === 1 ) dispatch(updateAmount(1))
          else dispatch(updateAmount(Number(amount)-1)); 
      }


    const handleCheck= async(e) => {
        if(isSelectAll) {
            setSelectAll(false)
        }
        const data = {
            name: e.target.name,
            price: e.target.value,
            id: e.target.id,
            amount: e.currentTarget.dataset.amount,
            urlImg: e.target.src
            }
        let isChecked = e.target.checked
        const findObj = (data) => {
            if(listChecked.length > 0) {
                if(listChecked.filter((check)=> {
                    return check.name === data.name
                }).length === 0) {
                    return false
                } else return true
            } else return false
        }
        if(isChecked && !findObj(data)) {

            setChecked([...listChecked, data])
            dispatch(checkSelector([...listChecked, data]))
        } else if(!isChecked && findObj(data)) {
          
            let  checked = listChecked.filter((value) => {
                if(value.name !== data.name) return value
            })
            dispatch(checkSelector(checked))
            setChecked(checked)
        }
    }
    // delete Item
    const handleDelete = (e) => {
        e.preventDefault();
        let index = e.currentTarget.dataset.index;
        let data = {
            id : id ,
            index : index
        }
        deleteItem(data, dispatch)
    }
    if(carts != null ) {
    return (
        <div className="flex flex-col">
            {
                carts.map((cart, index) => {
                    return (
                        <div className="flex flex-row bg-white border text-center h-24 items-center mt-4 text-lg" key={index}>
                            <div className="basis-1/3 flex flex-row items-center">
                                <input type='checkbox' className="mx-6 scale-150 mr-3 cursor-pointer"
                                onChange={handleCheck}
                                value={cart.price}
                                name={cart.name}
                                src = {cart.urlImg}
                                data-amount = {cart.amount}
                                id={cart.id}
                                checked={isSelectAll ? true: null}
                                />
                                <img src={cart.urlImg} className= 'mx-6 max-h-20 aspect-[16/10] border-2 border-red-500 rounded'/>
                                <div className='ml-4'>{cart.name}</div>
                            </div>
                            <div className="basis-1/6 text-[#ee4d2d]"><span>₫</span>{cart.price}</div>
                            <div className="basis-1/9 flex flex-row items-center">
                                <div className='cursor-pointer border border-stone-300' data-index={index} data-amount={cart.amount} onClick={decrementAmount}><BsCaretLeftFill  size={'24px'} color='#F1A661'/></div>
                                <span className="text-base px-2 border border-y-stone-300 ">{cart.amount}</span>
                                <div className='cursor-pointer  border border-stone-300' data-index={index} data-amount={cart.amount} onClick={incrementAmount}><BsCaretRightFill size={'24px'} color='#F1A661'/></div>
                
                            </div>
                            <div className="basis-1/9 text-[#ee4d2d]"><span>₫</span>{cart.amount * cart.price }</div>
                            <div className="basis-1/6">Cart</div>
                            <div className="basis-1/9 ">
                                <button className='border border-gray-500 p-2 rounded bg-blue-600 text-white' data-index={index}
                                onClick={handleDelete}
                                >Delete</button></div>
                        </div>
                    )
                })
            }
        </div>
    )
        }
}