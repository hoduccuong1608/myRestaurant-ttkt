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
        <div className="m-5 md:m-10">
            <div className="flex flex-row justify-between border-b-2 border-b-purple-900 mb-4">
                <div className=" text-2xl text-gray-900 font-bold md:text-4xl pb-4">{title}
                </div>
                <div className='flex items-center'>
                    <label htmlFor="search"className="absolute p-3"><BiSearch size={"30px"}/></label>
                    <input text="text" id="search" className="w-[30px] md:w-full pl-12 py-2 border-2 border-gray-800 rounded-lg"
                    onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="flex md:flex-row">
                <div className="flex flex-col h-auto min-w-[100px] md:min-w-[120px]">
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
                <div className="flex flex-row flex-wrap gap-x-3.5 gap-y-8 justify-end h-[800px] overflow-y-scroll">
                    {
                        items.map((item) => {
                            return (
                                <NavLink to={`/menu/${title.toLowerCase()}/${item.ID}`}
                                key={item.ID} className="bg-white my-2 cursor-pointer flex flex-col md:w-[30%] max-h-96 shadow-md shadow-sky-800 hover: border-purple-900 hover:border-2 ">
                                    <img className="w-full aspect-[4/3]" src={item.UrlImg} alt=''/>
                                    <div className='flex flex-row justify-between text-xl'>
                                        <div className='p-4 text-shope'>{item.Name}</div>
                                        <div className='text-[#ee4d2d] p-4'>
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
