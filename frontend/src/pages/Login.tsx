import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="p-32">
        <form className="bg-white w-1/2 mx-auto rounded-xl p-8 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-center">Giriş Yap</h2>
            <div className="flex flex-col w-3/4 mx-auto">
                <label htmlFor="email">Email</label>
                <input className="bg-slate-200 outline-none px-4 py-2" type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col w-3/4 mx-auto">
                <label htmlFor="password">Şifre</label>
                <input className="bg-slate-200 outline-none px-4 py-2" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <button className="bg-orange-500 text-white w-1/2 mx-auto px-4 py-2 rounded-xl my-4" type="submit">Giriş Yap</button>
            <p className='text-center'>Bir hesabın yokmu ? <Link to="/register" className='font-semibold'>Kayıt Ol</Link></p>
        </form>
    </div>
  )
}

export default Login