import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    // Kullanıcı bilgilerini temizle
    dispatch(setUser(null));

    // Başka bir sayfaya yönlendirebilirsiniz (örneğin, giriş sayfasına)
    navigate('/login')
  };

  return (
      <div className='block p-2 hover:bg-gray-700' onClick={handleLogout}>Çıkış Yap</div>
  );
};

export default Logout;
