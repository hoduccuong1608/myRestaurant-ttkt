import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { inforUser } from '../../redux/selector'
import {AiFillBell} from 'react-icons/ai'
function Admin() {
  const admin = useSelector(inforUser)
  if(admin.Admin !== 1) {
    return <Navigate to="/" />;
  }
    return (
      <div className=" inline-block min-h-screen">
        <div className="flex flex-row h-16 bg-gray-800 w-screen justify-between items-center">
          <div className="text-white text-2xl mx-8">Admin</div>
          <div className="flex flex-row items-center">
          <div className="text-white">Mail</div>
          <div className="text-white"><AiFillBell color="yellow"/></div>
          <div className="text-orange-300 mx-8 text-lg h-2/3 w-20 bg-gray-400 text-center rounded">Log out</div>
          </div>
          
        </div>
      </div>
      
    )
   }
   
   export default Admin;