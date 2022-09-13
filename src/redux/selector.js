import { createSelector } from "@reduxjs/toolkit"

export const inforUser = state => state.login.login?.currentUser
export const listDishsSelector = state => state.item.dishs.listDishs
export const listDrinksSelector = state => state.item.drinks.listDrinks
export const checkBoxDishsSelector = state => state.item.checkBox.dishs
export const checkBoxDrinksSelector = state => state.item.checkBox.drinks
export const searchDishsSelector = state => state.item.search.dishs
export const searchDrinksSelector = state => state.item.search.drinks
export const listCart = state => state.cart.cart.items
export const listBooked = state => state.cart.booked.items
export const selectorCart = state => state.cart.selector
export const isAddedItems = state => state.cart.cart.isAdded
export const isDeleteItems = state => state.cart.cart.isDeleted

export const listDishsFilter = createSelector (
    listDishsSelector, checkBoxDishsSelector, searchDishsSelector,
    (listDishs, checkBoxDishs, searchDishs) => {
        if(listDishs.length > 0)
        return listDishs.filter((list) => {
            if(checkBoxDishs.length === 0) {
                return list.Name.includes(searchDishs)
            } else {
                for(let checkBoxDish of checkBoxDishs) {
                    return list.MainMaterial.includes(checkBoxDish) && list.Name.includes(searchDishs)
                }
            }
        })
    }
)

export const listDrinksFilter = createSelector (
    listDrinksSelector, checkBoxDrinksSelector, searchDrinksSelector,
    (listDrinks, checkBoxDrinks, searchDrinks) => {
        if(listDrinks.length > 0)
        return listDrinks.filter((list) => {
            if(checkBoxDrinks.length === 0) {
                return list.Name.includes(searchDrinks)
            } else {
                for(let checkBoxDrink of checkBoxDrinks) {
                    return list.MainMaterial.includes(checkBoxDrink) && list.Name.includes(searchDrinks)
                }
            }
        })
    }
)