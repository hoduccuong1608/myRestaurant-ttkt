import ListItem from "../../compoments/ListItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../api/apiItems";
import { listDishsFilter, listDrinksFilter, listDishsSelector, listDrinksSelector } from "../../redux/selector";

function Menu() {
  const dispatch = useDispatch()
  const dishs = useSelector(listDishsFilter)
  const drinks = useSelector(listDrinksFilter)
  const checkDishs = useSelector(listDishsSelector)
  const checkDrinks = useSelector(listDrinksSelector)

  // list selector dishs
  let selectorDishs = []
  selectorDishs =  checkDishs?.filter(function(element){
      return selectorDishs.includes(element.MainMaterial) ? '' : selectorDishs.push(element.MainMaterial)
    });

  // list selector drinks
  let selectorDrinks = []
  selectorDrinks =  checkDrinks?.filter(function(element){
      return selectorDrinks.includes(element.MainMaterial) ? '' : selectorDrinks.push(element.MainMaterial)
    });

 
  // api item
 useEffect (() => {getAllItems(dispatch)}, [dispatch])
  if(dishs !== null)
    return (
      <div className=" inline-block w-full my-16 min-h-screen">
        {selectorDishs ? <ListItem title ='Dishs' selector = {selectorDishs} listItems = {dishs}/> : <></>}
        {selectorDrinks? <ListItem title ='Drinks' selector = {selectorDrinks} listItems = {drinks}/> : <></>}
      </div>
    )
   }
   
   export default Menu;