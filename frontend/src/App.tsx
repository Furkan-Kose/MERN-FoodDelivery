import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Foods from "./pages/Foods"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import FoodDetails from "./pages/FoodDetails"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <div className="max-w-[1440px] bg-slate-200 mx-auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App