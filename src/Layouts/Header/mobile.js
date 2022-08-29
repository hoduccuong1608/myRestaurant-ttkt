import { NavLink } from "react-router-dom";
const navs = ['home','menu','Book']
export default function MobileNav ({props}) {

    const active = props.active;
    const setActive = props.setActive;
    // console.log(active);
    
      return (
   
    <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        {/* <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a> */}

      {navs.map(nav => (
                    <NavLink  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base w-full font-medium uppercase" key={nav}
                    style={active === nav ? {backgroundColor: '#4B5563', color: '#fff'} : {}}
                    onClick={() => {setActive(nav)}}
                    to={`/${nav}`}
                    >{nav}</NavLink>
                    ))}
        </div>
    </div>
    )
}