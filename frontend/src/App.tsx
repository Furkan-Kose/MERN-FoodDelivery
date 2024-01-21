import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Foods from './pages/Foods';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import FoodDetails from './pages/FoodDetails';
import Profile from './pages/Profile';
import Admin from './pages/admin/Admin';
import Users from './pages/admin/Users';
import AddFood from './pages/admin/AddFood';
import AdminFoods from './pages/admin/AdminFoods';
import UpdateFood from './pages/admin/UpdateFood';
import AddUser from './pages/admin/AddUser';
import UpdateUser from './pages/admin/UpdateUser';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components//admin/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/userSlice';
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from './types';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      dispatch(setUser(JSON.parse(storedUserData)));
    } else {
      dispatch(setUser(null));
    }
  }, [dispatch]);

  const user = useSelector((state: any) => state.user.user);

  const decodedToken: JwtPayload | null = user ? jwtDecode(user.token) : null;

  const isAdmin = decodedToken?.isAdmin;

  const isNotAdminPage = () => {
    const currentPath = window.location.pathname;
    return !currentPath.startsWith('/admin');
  }

  return (
    <Router>
      {isNotAdminPage() && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        {isAdmin && (
          <Route
            path="/admin/*"
            element={
              <div className="bg-slate-800 w-full min-h-screen flex">
                <Sidebar />
                <Routes>
                  <Route index element={<Admin />} />
                  <Route path="users" element={<Users />} />
                  <Route path="foods" element={<AdminFoods />} />
                  <Route path="foods/add" element={<AddFood />} />
                  <Route path="foods/:id" element={<UpdateFood />} />
                  <Route path="users/add" element={<AddUser />} />
                  <Route path="users/:id" element={<UpdateUser />} />
                </Routes>
              </div>
            }
          />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isNotAdminPage() && <Footer />}
    </Router>
  );
};

export default App;
