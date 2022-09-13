import Footer from './Footer';
import Header from './Header';
import { useSelector } from "react-redux";
import { inforUser } from '../redux/selector'

function DefaultLayout({ children }) {
    const admin = useSelector(inforUser)
    return (
        <div>
            {/* {admin.Admin ===1 ? <></> : <Header/>} */}
            <Header/>
            <div className='bg-[#f5f5f5]'>{children}</div>
            <Footer/>
            {/* {admin.Admin ===1 ? <></> : <Footer/>} */}
        </div>
    );
}

export default DefaultLayout;