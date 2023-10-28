import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../services/userService';
import { setUser } from '../redux/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Kullanıcı giriş bilgilerini al
      const userData = {
        email,
        password,
      };

      // Giriş yapma isteğini gönder
      const response = await login(userData);

      // Giriş başarılı ise Redux store'a kullanıcı bilgilerini ekleyin
      dispatch(setUser(response));

      // Başka bir sayfaya yönlendirme yapabilirsiniz
      navigate('/');
      
    } catch (error) {
      console.error('Giriş sırasında bir hata oluştu:', error);
      // Hata durumunda kullanıcıya uygun geri bildirim verilebilir
    }
  };

  return (
    <div className="p-32">
      <form className="bg-white w-1/2 mx-auto rounded-xl p-8 flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center">Giriş Yap</h2>
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
          onClick={handleLogin}
        >
          Giriş Yap
        </button>
        <p className="text-center">
          Bir hesabın yok mu?{' '}
          <Link to="/register" className="font-semibold">
            Kayıt Ol
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
