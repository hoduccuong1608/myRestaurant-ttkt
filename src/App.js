import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import DefaultLayout from "./Layouts/default";
import AddItem from './compoments/AddItem';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Book from './pages/Book';
import Menu from './pages/Menu';
import Admin from './pages/Admin';
import Profile from './pages/UserProfile';
import UpdateInfor from './pages/UserProfile/UpdateInfor';
import Recharge from './pages/UserProfile/Recharge';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllItem } from './api/apiItem';

function App() {
  const dispatch = useDispatch()
   // api item
  useEffect(() =>{
    getAllItem(dispatch);
  }, [])
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login"  element={< Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/menu"  element={<Menu/>} >
            <Route path=":title/:id" element={<AddItem/>} />
          </Route>
          <Route path="/book"  element={<Book/>}  />
          <Route path="/admin"  element={<Admin/>}  />  
          <Route path="/profile"  element={<Profile/>} >
            <Route path='edit' element={<UpdateInfor/>}/>           
            <Route path= 'recharge' element={<Recharge/>}/>
          </Route> 
          <Route path="*"  element={<HomePage/>}  />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
