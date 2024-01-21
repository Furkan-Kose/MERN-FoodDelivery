import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FoodType } from '../../types'
import { getFoodById, updateFood } from '../../services/foodService'
import { toast } from 'react-toastify'

const UpdateFood = () => {

    const [food, setFood] = useState<FoodType | undefined>();
    const [formData, setFormData] = useState<Partial<FoodType>>();

    const location = useLocation();
    const foodId = location.pathname.split('/')[3];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getFoodById(foodId);
                setFood(response);
            } catch (error) {
                console.error('Veri alınamadı:', error);
            }
        }
        fetchData()
    }, [foodId])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const updatedFoodData: FoodType = {
                ...food!,
                ...formData!,
            };

            await updateFood(foodId, updatedFoodData);

            const updatedResponse = await getFoodById(foodId);
            setFood(updatedResponse);

            console.log('Food updated successfully!');
            toast.success("Yemek Başarıyla Güncellendi!", {
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
            console.error('Food update failed:', error);
            toast.error("Yemek Güncellenirken Bir Hata Oluştu!", {
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
    <div className='p-12 w-full flex gap-12 mb-5'>
        <div className='w-1/4 p-5 rounded-lg font-bold text-gray-300'>
            <div className='w-full h-80 relative rounded-lg overflow-hidden'>
                <img src={food?.image} alt="" />
            </div>
            {food?.name}
        </div>
        <div className='w-3/4 p-5 rounded-lg'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <label className='text-sm text-gray-300'>Yemek Adı</label>
                <input 
                    className='p-5 border-2 border-slate-500 rounded-md bg-slate-900 text-white my-2 outline-none' 
                    type="text" 
                    name="name" 
                    placeholder={food?.name} 
                    value={formData?.name}
                    onChange={handleChange}
                />
                <label className='text-sm text-gray-300'>Fiyat</label>
                <input 
                    className='p-5 border-2 border-slate-500 rounded-md bg-slate-900 text-white my-2 outline-none' 
                    type="number" 
                    name="price" 
                    placeholder={food?.price?.toString()} 
                    value={formData?.price}
                    onChange={handleChange}
                />
                <label className='text-sm text-gray-300'>Kategori</label>
                <select 
                    className='p-5 border-2 border-slate-500 rounded-md bg-slate-900 text-gray-300 my-2 outline-none' 
                    name="category" 
                    id="category"
                    value={formData?.category}
                    onChange={handleChange}
                >
                    <option value="Burger">Burger</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Tatlı">Tatlı</option>
                </select>
                <label className='text-sm text-gray-300'>Açıklama</label>
                <textarea
                  className='p-5 border-2 border-slate-500 rounded-md bg-slate-900 text-white my-2 outline-none'
                  name="description" 
                  id="description" 
                  rows={5}
                  placeholder={food?.description}
                  value={formData?.description}
                  onChange={handleChange}
                ></textarea>
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

export default UpdateFood