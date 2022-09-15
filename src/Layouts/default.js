import Footer from './Footer';
import Header from './Header';
import { useSelector } from "react-redux";
import { inforUser } from '../redux/selector'

function DefaultLayout({ children }) {
    const admin = useSelector(inforUser)
    if(admin != null && admin.Admin == 1) {
        return (
        <div>
            <div className='bg-[#f5f5f5] min-h-screen'>{children}</div>
        </div>
        )
    }
    return (
        <div>
            <Header/>
            <div className='bg-[#f5f5f5]'>{children}</div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;