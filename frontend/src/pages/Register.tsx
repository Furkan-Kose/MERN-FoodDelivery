import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../services/userService';
import { setUser } from '../redux/userSlice';
import { toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const userData = {
        email,
        password,
        username,
        _id:""
      };

      const response = await register(userData);
      dispatch(setUser(response));
      navigate('/login');

      toast.success('Kayıt başarılı!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      
    } catch (error) {
      console.error('Kayıt sırasında bir hata oluştu:', error);
      toast.error('Kayıt sırasında bir hata oluştu!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="p-20 max-w-[1440px] min-h-[630px] bg-slate-200 mx-auto">
      <form className="bg-white w-1/2 mx-auto rounded-xl p-8 flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center">Kayıt Ol</h2>
        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="email">Email</label>
          <input
            className="bg-slate-200 outline-none px-4 py-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            className="bg-slate-200 outline-none px-4 py-2"
            type="text"
            name="username"
            id="username"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-3/4 mx-auto">
          <label htmlFor="password">Şifre</label>
          <input
            className="bg-slate-200 outline-none px-4 py-2"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-orange-500 text-white w-1/2 mx-auto px-4 py-2 rounded-xl my-4"
          type="button"
          onClick={handleRegister}
        >
          Kayıt Ol
        </button>
        <p className="text-center">
          Zaten bir hesabın var mı?{' '}
          <Link to="/login" className="font-semibold">
            Giriş Yap
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
