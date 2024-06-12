import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './Feature/Pages/User';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Manage_User from './Feature/Pages/Manage_User';
import Edit_user from './Feature/Pages/Edit_user';
import Signup from './Feature/Pages/Signup';
import Login from './Feature/Pages/Login';
function App() {
  return (
    <div className="App">
         <ToastContainer />
     <BrowserRouter>
     <Routes>
      <Route path='/Add_user' element={<User />}></Route>
      <Route path='/' element={<Manage_User />}></Route>
      <Route path='/edit/:id' element={<Edit_user />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App; 