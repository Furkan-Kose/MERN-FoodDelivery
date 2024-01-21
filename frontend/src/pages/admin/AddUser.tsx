import { createUser } from "../../services/userService";
import { UserType } from "../../types";
import { useState } from "react";
import { toast } from "react-toastify";

const AddUser = () => {

    const [formData, setFormData] = useState<UserType>({
        _id: '',
        username: '',
        email: '',
        password: '',
        isAdmin: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createUser(formData);

            toast.success("Kullanıcı Başarıyla Eklendi", {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });

            setFormData({
                _id: '',
                username: '',
                email: '',
                password: '',
                isAdmin: false,
            });

        } catch (error) {
            console.error('Kullanıcı eklenirken bir hata oluştu:', error);
            toast.error("Kullanıcı Eklenirken Bir Hata Oluştu", {
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
    }

  return (
    <div className="p-12 w-full">
        <h1 className="text-center text-white text-3xl mb-6 pb-2 border-b border-slate-500 font-semibold">Kullanıcı Ekle</h1>
        <form className="flex flex-wrap justify-between" onSubmit={handleSubmit}>
            <input 
              className="w-[45%] p-5 mb-6 rounded-md bg-slate-900 text-white border-2 border-slate-500 outline-none" 
              type="text" 
              placeholder="Kullanıcı Adı" 
              name="username" 
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input 
              className="w-[45%] p-5 mb-6 rounded-md bg-slate-900 text-white border-2 border-slate-500 outline-none" 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              className="w-[45%] p-5 mb-6 rounded-md bg-slate-900 text-white border-2 border-slate-500 outline-none" 
              type="password" 
              placeholder="Şifre" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
            <select 
              className="w-[45%] p-5 mb-6 rounded-md bg-slate-900 text-white border-2 border-slate-500 outline-none" 
              name="isAdmin" 
              value={formData?.isAdmin?.toString()}
              onChange={handleChange}
              required
            >
                <option value="true">Admin</option>
                <option value="false">Kullanıcı</option>
            </select>
            <button 
              className="w-full p-5 bg-teal-500 rounded-md text-white border-2 border-teal-300" 
              type="submit"
            >
              Kaydet
            </button>
        </form>
    </div>
    
  )
}

export default AddUser