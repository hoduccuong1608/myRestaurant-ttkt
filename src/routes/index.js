
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../compoments/Menu";
import Book from "../compoments/Book";
import Admin from "../pages/Admin";


export const publicRoutes = [
    {path: '/' , compoment: HomePage },
    {path: '/login' , compoment: Login },
    {path: '/register' , compoment: Register},
    {path: '/menu' , compoment: Menu },
    {path: '/book' , compoment: Book },
    {path: '*' , compoment: HomePage }
   
]

export const privateRoutes = [
    {path: '/admin' , compoment: Admin, layout: null },
]
