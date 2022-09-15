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
export const isBuyItems = state => state.cart.booked.isBooked
export const listOrderSelector = state => state.admin.listOrder.list
export const isCancel = state => state.cart.booked.isCanceled

export const listDishsFilter = createSelector (
    listDishsSelector, checkBoxDishsSelector, searchDishsSelector,
    (listDishs, checkBoxDishs, searchDishs) => {
        if(listDishs.length >= 0) {
        let data =  listDishs.map((list) => {
            if(checkBoxDishs.length === 0) {
                if (list.Name.includes(searchDishs)) return list
            } else {
                for(let checkBoxDish of checkBoxDishs) {
                    if (list.MainMaterial.includes(checkBoxDish) && list.Name.includes(searchDishs)) {
                            return list
                    }
                }
            }
        })
    return data
    }
    }
)

export const listDrinksFilter = createSelector (
    listDrinksSelector, checkBoxDrinksSelector, searchDrinksSelector,
    (listDrinks, checkBoxDrinks, searchDrinks) => {
        if(listDrinks.length >= 0) {
            let data = listDrinks.filter((list) => {
                if(checkBoxDrinks.length === 0) {
                    if (list.Name.includes(searchDrinks)) return list
                } else {
                    for(let checkBoxDrink of checkBoxDrinks) {
                        if( list.MainMaterial.includes(checkBoxDrink) && list.Name.includes(searchDrinks)) {
                            return list
                        }
                    }
                }
            })
            return data
        }
    }
)