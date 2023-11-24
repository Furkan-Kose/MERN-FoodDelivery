import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import Logout from './Logout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';

const Navbar = () => {
  const [isDropdownUserOpen, setDropdownUserOpen] = useState(false);
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const cart = useSelector((state: RootState) => state.cart)
  const quantity = cart.foods.length
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user)

  const toggleDropdownUser = () => {
    setDropdownUserOpen(!isDropdownUserOpen);
  };

  const toggleDropdownMenu = () => {
    setDropdownMenuOpen(!isDropdownMenuOpen);
  };

  const handleSearch = (searchTerm: string) => {
    navigate(`/foods?search=${searchTerm}`);
  }

  return (
    <div className='bg-orange-500 text-white'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <div onClick={toggleDropdownMenu} className='lg:hidden flex items-center space-x-4 text-3xl font-medium'>
            <AiOutlineMenu />
            {
              isDropdownMenuOpen && (
                <div className='absolute top-16 -left-4 w-40 bg-orange-500 text-white shadow-md z-10 opacity-75 text-center text-lg'>
                  <Link to="/" className='block p-2 hover:bg-gray-700'>Ana Sayfa</Link>
                  <Link to="/foods" className='block p-2 hover:bg-gray-700'>Yemekler</Link>
                  <Link to="/contact" className='block p-2 hover:bg-gray-700'>İletişim</Link>
                </div>
              )
            }
        </div>
        <div className='text-2xl font-bold'>
          <Link to="/">RESTAURANT</Link>
        </div>
        <div className='hidden lg:flex items-center space-x-4 text-lg font-medium'>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/foods">Yemekler</Link>
          <Link to="/contact">İletişim</Link>
        </div>
        <div className='flex items-center space-x-4 text-lg'>
          <div className='flex items-center justify-center bg-white text-black py-1 px-2 rounded-xl'>
            <input 
              className='outline-none max-md:w-32' 
              type="text" 
              placeholder='Search...' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchTerm)}  
            />
            <span onClick={()=>handleSearch(searchTerm)}><AiOutlineSearch/></span> 
          </div>
          <Link className='text-3xl relative' to="/cart">
            <AiOutlineShoppingCart />
            {quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium opacity-75">
                {quantity}
              </span>
            )}
          </Link>
          <div className='text-3xl cursor-pointer' onClick={toggleDropdownUser}>
            <AiOutlineUser />
            {isDropdownUserOpen && (
              <div className='absolute top-16 right-0 xl:right-[5.5rem] w-40 bg-orange-500 text-white shadow-md z-10 opacity-75 text-center text-lg'>
                {user ? (
                  <>
                    <Link to="/profile" className='block p-2 hover:bg-gray-700'>Profil</Link>
                    <Logout/>
                  </>
                  ) : (
                    <>
                      <Link to="/login" className='block p-2 hover:bg-gray-700'>Giriş Yap</Link>
                      <Link to="/register" className='block p-2 hover:bg-gray-700'>Kayıt Ol</Link>
                    </>
                  )
                }
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
