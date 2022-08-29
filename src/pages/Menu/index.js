import ListItem from "../../compoments/ListItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItem } from "../../api/apiItem";


function Menu() {
  const dispatch = useDispatch()
  const dishs = useSelector((state) => state.item.dishs?.listDishs)
  const drinks = useSelector((state) => state.item.drinks?.listDrinks)
  
  // list selector dishs
  let selectorDishs = []
  selectorDishs =  dishs?.filter(function(element){
      return selectorDishs.includes(element.MainMaterial) ? '' : selectorDishs.push(element.MainMaterial)
    });
  // console.log(selectorDishs)
  // list selector drinks
  let selectorDrinks = []
  selectorDrinks =  drinks?.filter(function(element){
      return selectorDrinks.includes(element.MainMaterial) ? '' : selectorDrinks.push(element.MainMaterial)
    });
  // console.log(selectorDrinks)
 
  // api item
  useEffect(() =>{
    getAllItem(dispatch);
  }, [])
  

    return (
      <div className=" inline-block w-full my-16 h-auto ">
        {selectorDishs ? <ListItem title ='Dishs' selector = {selectorDishs} listItems = {dishs}/> : <></>}
        {selectorDrinks? <ListItem title ='Drinks' selector = {selectorDrinks} listItems = {drinks}/> : <></>}
      </div>

    )
   }
   
   export default Menu;