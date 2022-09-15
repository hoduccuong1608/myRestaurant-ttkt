import Intro from "./Intro";
import Content from "./Content";
import Slider from "./Slider";
import { Navigate, } from "react-router-dom";
import { inforUser } from '../../redux/selector'
import { useSelector } from "react-redux";

function HomePage() {
  const currentUser = useSelector(inforUser)
  if(currentUser.Admin == 1) {
    return <Navigate to='/admin/listOrder'/>
  }
    return (
      <div className=" inline-block mx-10 my-16 h-auto ">
        <Slider/>
        <Intro/>
        <Content/>
      </div>

    )
   }
   
   export default HomePage;