import { useParams, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import {AiFillCloseSquare} from 'react-icons/ai';
import {BsCaretLeftFill, BsCaretRightFill, BsFillCartPlusFill} from 'react-icons/bs'

export default function AddItem() {
  const { title, id } = useParams();
  const listDishs = useSelector((state) => state.item.dishs?.listDishs)
  const listDrinks = useSelector((state) => state.item.drinks?.listDrinks)
  const defaultAmount = useRef(1)
  const [amount, setAmount] = useState(defaultAmount.current)
  const navigate = useNavigate()

  // console.log(listDishs, listDrinks)
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


  const addToCart = () => {

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
      <div className="relative h-screen mx-10 mt-24">
        <div className="flex flex-col w-5/6 md:flex-row justify-start mx-auto bg-white content-center">
          <img className="md:w-2/3 aspect-[16/10]" src={item.UrlImg} alt=''/>
          <div className="flex flex-col ml-5">
              <div className="p-3 text-2xl text-shope ">{item.Name}</div>
              <div className='text-[#ee4d2d] p-3 text-2xl'>
                <span>₫</span>
                {item.Price}
              </div>
              <div className="flex flex-row p-3 justify-between">
                <div className="flex flex-row items-center">
                  <div className='cursor-pointer' onClick={decrementAmount}><BsCaretLeftFill size={'24px'} /></div>
                  <span className="text-xl px-2">{amount}</span>
                  <div className='cursor-pointer' onClick={incrementAmount}><BsCaretRightFill size={'24px'} /></div>
                </div>
                <div className='cursor-pointer' onClick={addToCart}><BsFillCartPlusFill size={'30px'}/></div>
              </div>
          </div>
          <div className='absolute float-right right-0 mr-7 cursor-pointer' onClick={()=> navigate(-1)}>  <AiFillCloseSquare size={'40px'} color='#F1A661'/></div>
        </div>
      </div>
    </div>
  );
 }
}