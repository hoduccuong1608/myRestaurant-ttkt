import { useState } from 'react';
import {BiSearch} from 'react-icons/bi'
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { filterCheckBoxDishs, filterSearchDishs, filterCheckBoxDrinks, filterSearchDrinks } from '../pages/Menu/itemSlice';
export default function ListItem(props) {

    const title = props.title
    let items = props.listItems
    let selectorItems = props.selector
    const [checkBox, setCheckBox] = useState([])
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        setSearch(e.target.value)
        if(title === 'Dishs') {
            dispatch(filterSearchDishs(e.target.value))
        } else if (title === 'Drinks') {
            dispatch(filterSearchDrinks(e.target.value))
        }
    }

    const handleCheckBox = (e) => {
        let isChecked = e.target.checked;
        // console.log(e.target.value, isChecked)
        if(isChecked && !checkBox.includes(e.target.value)) {
            setCheckBox([...checkBox, e.target.value])
            if(title === 'Dishs') {
                dispatch(filterCheckBoxDishs([...checkBox, e.target.value]))
            } else if (title === 'Drinks') {
                dispatch(filterCheckBoxDrinks([...checkBox, e.target.value]))
            }
        } else if(!isChecked && checkBox.includes(e.target.value)) {
            let checked = checkBox.filter(function(value){
                return value != e.target.value ;
            })
            setCheckBox(checked)
            if(title === 'Dishs') {
                dispatch(filterCheckBoxDishs(checked))
            } else if (title === 'Drinks') {
                dispatch(filterCheckBoxDrinks(checked))
            }
        }
        
    }
    return (
        <div className="m-3 md:m-10">
            <div className=" flex flex-row justify-between border-b-2 border-b-purple-900 mb-4">
                <div className=" text-2xl text-gray-900 font-bold md:text-4xl pb-4">{title}
                </div>
                <div className='flex items-center'>
                    <label htmlFor="search"className="absolute cursor-pointer p-3"><BiSearch size={"30px"}/></label>
                    <input text="text" id="search" className="w-[30px] md:w-full pl-12 py-2 border-2 border-gray-800 rounded-lg"
                    onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="flex md:flex-row">
                <div className=" basis-1/9 flex flex-col mr-2 md:mr-10 h-auto ">
                    {
                        selectorItems.map((check)=> {
                            return <div key={check.ID}>
                                <input type="checkbox" value={check.MainMaterial} className="scale-150 mr-3" id={check.MainMaterial} name={check.MainMaterial}
                                onClick={handleCheckBox}
                                />
                                <label htmlFor={check.MainMaterial} className="text-base md:text-xl text-shope">{check.MainMaterial}</label>
                            </div>
                        })
                    }
                </div>
                <div className=" basis-8/9 flex flex-row flex-wrap gap-x-3.5 gap-y-8 justify-start h-auto">
                    {
                        items.map((item) => {
                            return (
                                <NavLink to={`/menu/${title.toLowerCase()}/${item.ID}`}
                                key={item.ID} className="bg-white my-2 cursor-pointer flex flex-col w-full md:w-[48.5%] lg:w-[32.1%] h-auto border hover: border-orange-500 hover:border-2 ">
                                    <img className="w-full aspect-[4/3]" src={item.UrlImg} alt=''/>
                                    <div className='flex flex-col md:flex-row justify-between text-xl'>
                                        <div className='p-2 md:p-4 text-shope'>{item.Name}</div>
                                        <div className='text-[#ee4d2d] p-2 md:p-4'>
                                            <span>₫</span>
                                            {item.Price}
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        <Outlet />
        </div>
    )
};
