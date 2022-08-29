import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header/>
            <div className='bg-[#f5f5f5]'>{children}</div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;