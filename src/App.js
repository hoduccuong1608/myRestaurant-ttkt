import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import DefaultLayout from "./Layouts/default";
import AddItem from './compoments/AddItem';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Book from './pages/Book';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
// import UpdateInfor from './pages/UserProfile/UpdateInfor';
// import Recharge from './pages/UserProfile/Recharge';
import Address from './pages/Profile/Address';
import ChangePassword from './pages/Profile/ChangePassword';
import PurchaseOrder from './pages/Profile/PurchaseOrder';
import Notify from './pages/Profile/Notify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllItems } from './api/apiItems';

function App() {
  const dispatch = useDispatch()
   // api item
  useEffect(() =>{
    getAllItems(dispatch);
  }, [dispatch])
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login"  element={< Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/cart/:id" element={<Cart/>} />
          <Route path="/menu"  element={<Menu/>} >
            <Route path=":title/:id" element={<AddItem/>} />
          </Route>
          <Route path="/book"  element={<Book/>}  />
          <Route path="/admin"  element={<Admin/>}  />  
          <Route path="/profile"  element={<Profile/>} >
            {/* <Route path='edit' element={<UpdateInfor/>}/>            */}
            {/* <Route path= 'recharge' element={<Recharge/>}/> */}
            <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
            <Route path="address" element={<Address/>}/>
            <Route path="changePassword" element={<ChangePassword/>}/>
            <Route path= "purchaseOrder" element={<PurchaseOrder/>}/>
            <Route path= "notify" element={<Notify/>}/>
          </Route> 
          <Route path="*"  element={<HomePage/>}  />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
