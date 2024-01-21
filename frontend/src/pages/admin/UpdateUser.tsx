import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { UserType } from '../../types'
import { getUserById, updateUser } from '../../services/userService'
import { MdPerson } from 'react-icons/md'
import { toast } from 'react-toastify'

const UpdateUser = () => {

    const [user, setUser] = useState<UserType | undefined>();
    const [formData, setFormData] = useState<Partial<UserType>>();

    const location = useLocation();
    const userId = location.pathname.split('/')[3];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserById(userId);
                setUser(response);
            } catch (error) {
                console.error('Veri alınamadı:', error);
            }
        }
        fetchData()
    }, [userId])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const updatedUserData: UserType = {
                ...user!,
                ...formData!,
            };

            await updateUser(userId, updatedUserData);

            const updatedResponse = await getUserById(userId);
            setUser(updatedResponse);

            console.log('User updated successfully!');
            toast.success("Kullanıcı Başarıyla Güncellendi!", {
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
            console.error('User update failed:', error);
            toast.error("Kullanıcı Güncellenirken Bir Hata Oluştu!", {
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
    <div className='p-12 w-full flex gap-12 mb-5'>
        <div className='w-1/4 p-5 rounded-lg font-bold text-gray-300'>
            { user?.image ? (
                <div className='w-full h-80 relative rounded-lg overflow-hidden'>
                    <img src={user?.image} alt="" />
                </div> 
                ) :
                <MdPerson className='w-full h-80 text-gray-400' />
            }
            {user?.username}
        </div>
        <div className='w-3/4 p-5 rounded-lg'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <label className='text-sm text-gray-300'>Kullanıcı Adı</label>
                <input 
                    className='p-5 border-2 border-slate-500 rounded-md bg-slate-900 text-white my-2 outline-none' 
                    type="text" 
                    name="username" 
                    placeholder={user?.username} 
                    value={formData?.username}
                    onChange={handleChange}
                />
                <label className='text-sm text-gray-300'>Email</label>
                <input 
                    className='p-5 border-2 border-slate-500 rounded-md bg-slate-900 text-white my-2 outline-none' 
                    type="email" 
                    name="email" 
                    placeholder={user?.email} 
                    value={formData?.email}
                    onChange={handleChange}
                />
                <label className='text-sm text-gray-300'>Şifre</label>
                <input 
                    className='p-5 border-2 border-slate-500 rounded-md bg-slate-900 text-white my-2 outline-none' 
                    type="password" 
                    name="password" 
                    placeholder={user?.password} 
                    value={formData?.password}
                    onChange={handleChange}
                />
                <label className='text-sm text-gray-300'>Rol</label>
                <select 
                    className='p-5 border-2 border-slate-500 rounded-md bg-slate-900 text-gray-300 my-2 outline-none' 
                    name="isAdmin" 
                    id="isAdmin"
                    value={formData?.isAdmin?.toString()}
                    onChange={handleChange}
                >
                    <option value="false">Kullanıcı</option>
                    <option value="true">Admin</option>
                </select>
                <button 
                    className='w-full p-5 bg-teal-500 text-white rounded-md mt-5 border-2 border-teal-300'
                    type="submit"
                >   
                    Güncelle
                </button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser