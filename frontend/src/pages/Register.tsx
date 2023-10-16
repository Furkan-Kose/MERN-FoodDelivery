import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="p-[5.5rem]">
        <form className="bg-white w-1/2 mx-auto rounded-xl p-8 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-center">Kayıt Ol</h2>
            <div className="flex flex-col w-3/4 mx-auto">
                <label htmlFor="name">Ad</label>
                <input className="bg-slate-200 outline-none px-4 py-2" type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="flex flex-col w-3/4 mx-auto">
                <label htmlFor="email">Email</label>
                <input className="bg-slate-200 outline-none px-4 py-2" type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col w-3/4 mx-auto">
                <label htmlFor="password">Şifre</label>
                <input className="bg-slate-200 outline-none px-4 py-2" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <button className="bg-orange-500 text-white w-1/2 mx-auto px-4 py-2 rounded-xl my-4" type="submit">Kayıt Ol</button>
            <p className='text-center'>Zaten bir hesabın varmı ? <Link to="/login" className='font-semibold'>Giriş Yap</Link></p>
        </form>
    </div>
  )
}

export default Register