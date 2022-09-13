import { useParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {AiFillCloseSquare, AiFillCheckCircle} from 'react-icons/ai';
import {BsCaretLeftFill, BsCaretRightFill, BsFillCartPlusFill} from 'react-icons/bs'
import { addToCart } from "../api/apiCart";
import {inforUser, listDishsSelector, listDrinksSelector, isAddedItems} from '../redux/selector'
// import { isAddedtoCart } from "../pages/Cart/cartSlice";

export default function AddItem() {
  const { title, id } = useParams();
  const listDishs = useSelector(listDishsSelector)
  const listDrinks = useSelector(listDrinksSelector)
  const currentUser = useSelector(inforUser)
  const isAdded = useSelector(isAddedItems)
  const defaultAmount = useRef(1)
  const [amount, setAmount] = useState(defaultAmount.current)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // find item by id
  function findDishs(number) {
    return listDishs.find((dish) => dish.ID === number);
  }
  function findDrinks(number) {
    return listDrinks.find((drink) => drink.ID === number);
  }

  //
  let item = null;
  if(title === 'dishs') {
     item = findDishs(parseInt(id, 10));
    // console.log(item)
  } else if(title === 'drinks') {
     item = findDrinks(parseInt(id, 10));
    // console.log(item)
  }
   // post to cart
  const handleAdd = () => {
    if(currentUser == null) {
      navigate('/login', { replace: true })
    } else { let data = {
      id: currentUser.UserID,
      cart: [
        {
        id: item.ID,
        name: item.Name,
        urlImg: item.UrlImg,
        amount: amount,
        price: item.Price
      },
    ]
    } 
    addToCart(data, dispatch)
  }
  }

  const incrementAmount = () => {
    setAmount(amount + 1);
  }
  const decrementAmount = () => {
    if( amount === 1 ) setAmount(1)
      else setAmount(amount - 1); 
  }
 if(item !== null) {
  return (
    <div className="fixed inset-0 bg-[#000]/40 z-30" id='box-item'>
      <div className="relative max-w-7xl h-screen mx-2 md:mx-10 top-1/2 -translate-y-1/3">
        <div className="flex flex-col w-5/6 lg:flex-row justify-center items-center lg:items-start mx-auto bg-white content-center h-auto border rounded">
          <img className="w-11/12 lg:w-2/3 m-3 aspect-[16/10] border border-gray-600" src={item.UrlImg} alt=''/>
          <div className="w-full lg:w-1/3 flex flex-col m-4 lg:ml-8">
              <div className="mx-4 flex flex-col gap-3 md:gap-10 md:flex-row md:mb-4 lg:flex-col lg:gap-3 lg:my-4 mb-3 ">
                <div className="text-2xl w-full text-shope ">{item.Name}
                </div>
                <div className='text-[#ee4d2d] text-2xl'>
                  <span>₫</span>
                  {item.Price}
                </div>
              </div>
              <div className="mx-4 flex flex-row justify-between lg:my-6">
                <div className="text-lg text-slate-500">Amount</div>
                <div className="flex flex-row items-center">
                  <div className='cursor-pointer border border-stone-300' onClick={decrementAmount}><BsCaretLeftFill size={'28px'} color='#F1A661'/></div>
                  <span className="text-xl px-2 border border-y-stone-300 ">{amount}</span>
                  <div className='cursor-pointer  border border-stone-300' onClick={incrementAmount}><BsCaretRightFill size={'28px'} color='#F1A661'/></div>
                </div>
              </div>
              <div className='cursor-pointer bg-[#FDF3F4] flex flex-row mt-4 mx-4 justify-center items-center gap-4 border border-red-300 p-2  ' 
              onClick={handleAdd}>
                <BsFillCartPlusFill size={'30px'} color='red'/>
                <div className="text-xl text-red-500">Add to Cart</div>
              </div>
              <div className="cursor-pointer text-white text-xl text-center mx-4 h-12 bg-red-600 p-2 my-4">Buy now</div>
              <div className='lg:mt-3 mx-auto cursor-pointer' onClick={()=> navigate(-1)}>  <AiFillCloseSquare size={'40px'} color='#F1A661'/></div>
          </div>
        </div>
      {isAdded && <BoxIsAdded/>}
      </div>
    </div>
  );
 }
}

const BoxIsAdded =() => {

  return (
    <div className="w-48 h-32 sm:w-60 sm:h-48 flex flex-col justify-center items-center bg-[#000]/70 border rounded  relative -top-1/2 left-1/2 -translate-x-1/2">
      <div className="">
        <AiFillCheckCircle color="#00e600" size='50px'/>
      </div>
      <div className="text-white text-base sm:text-lg">San pham da duoc them</div>
    </div>
  )
}