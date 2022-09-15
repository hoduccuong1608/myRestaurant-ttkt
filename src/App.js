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
import ListOrder from './pages/Admin/ListOrder';
import Product from './pages/Admin/Product';
import Users from './pages/Admin/Users';
import Table from './pages/Admin/Table';
import Profile from './pages/Profile';
import Address from './pages/Profile/Address';
import ChangePassword from './pages/Profile/ChangePassword';
import PurchaseOrder from './pages/Profile/PurchaseOrder';
import Notify from './pages/Profile/Notify';
import Infor from './pages/Profile/Infor';
import Recharge from './pages/Profile/Recharge';


function App() {

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
          <Route path="/admin"  element={<Admin/>}>
            <Route index path= 'listOrder' element={<ListOrder/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="table" element={<Table/>}/>
            <Route path="*"  element={<ListOrder/>} />
          </Route>  
          <Route path="/account"  element={<Profile/>} >
            <Route  path="profile" element={<Infor/>}/>
            <Route path= 'recharge' element={<Recharge/>}/>
            <Route path="address" element={<Address/>}/>
            <Route path="changePassword" element={<ChangePassword/>}/>
            <Route path= "purchaseOrder" element={<PurchaseOrder/>}/>
            <Route path= "notify" element={<Notify/>}/>
            <Route path="*"  element={<Profile/>} />
          </Route> 
          <Route path="*"  element={<HomePage/>} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
