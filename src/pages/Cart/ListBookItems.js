import { useDispatch, useSelector } from "react-redux"
import { listBooked} from '../../redux/selector'
import { getListBooked } from "../../api/apiCart";
import { useEffect } from "react";

export const ListBooked = (props) => {
    const id =props.id
    const dispatch = useDispatch()

    //get list booked
    useEffect(()=> {
        getListBooked(id, dispatch)
    },[])

    const listBook = useSelector(listBooked).map((items) =>{
        return items.List
    })
        // console.log(listBook)
    let lists = listBook.flat()
    
    const listIndex = useSelector(listBooked).map((items1, index1) =>{
        let index = items1.List.map((items2, index2) => {
            return {index1, index2}
        })
        return index
    })
    let index = listIndex.flat()
    // console.log(index)
    
    const handleCancel = (e) => {
        e.preventDefault();
        let index = e.currentTarget.dataset.index;
        let data = {
            id : id ,
            index : index
        }
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
                                <button className='border border-gray-500 p-2 rounded bg-red-600 text-white' data-index={index[i]}
                                onClick={handleCancel}
                                >Cancel</button></div>
                        </div>
                    )
                })
            }
        </div>
    )
}