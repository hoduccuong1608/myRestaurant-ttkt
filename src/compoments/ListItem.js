import {BiSearch} from 'react-icons/bi'
import { NavLink, Outlet } from "react-router-dom";

export default function ListItem(props) {

    const title = props.title
    let items = props.listItems
    let selectorItems = props.selector
    return (
        <div className="m-5 md:m-10">
            <div className="flex flex-row justify-between border-b-2 border-b-purple-900 mb-4">
                <div className=" text-2xl text-gray-900 font-bold md:text-4xl pb-4">{title}
                </div>
                <div className='flex items-center'>
                    <label htmlFor="search"className="absolute p-3"><BiSearch size={"30px"}/></label>
                    <input text="text" id="search" className="w-[30px] md:w-full pl-12 py-2 border-2 border-gray-800 rounded-lg"/>
                </div>
            </div>
            <div className="flex md:flex-row">
                <div className="flex flex-col h-auto min-w-[100px] md:min-w-[120px]">
                    {
                        selectorItems.map((item)=> {
                            return <div key={item.ID}>
                                <input type="checkbox" className="scale-150 mr-3" id={item.MainMaterial}></input>
                                <label htmlFor={item.MainMaterial} className="text-base md:text-xl text-shope">{item.MainMaterial}</label>
                            </div>
                        })
                    }
                </div>
                <div className="flex flex-row flex-wrap gap-x-3.5 gap-y-8 justify-end h-[800px] overflow-y-scroll">
                    {
                        items.map((item) => {
                            return (
                                <NavLink to={`/menu/${title.toLowerCase()}/${item.ID}`}
                                key={item.ID} className="bg-white my-2 cursor-pointer flex flex-col md:w-[30%] shadow-md shadow-sky-800 hover: border-purple-900 hover:border-2 ">
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
