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

  // api item
  useEffect (() => {
    getAllItems(dispatch)}
    , [dispatch])
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

  if(dishs.length > 0 && drinks.length > 0 ) {
    return (
      <div className=" inline-block w-full my-16 min-h-screen">
        {selectorDishs ? <ListItem title ='Dishs' selector = {selectorDishs} listItems = {dishs}/> : <></>}
        {selectorDrinks? <ListItem title ='Drinks' selector = {selectorDrinks} listItems = {drinks}/> : <></>}
      </div>
    )}
   }
   
   export default Menu;