import { createFood } from "../../services/foodService"
import { useState } from "react"
import { FoodType } from "../../types"
import { toast } from "react-toastify"

const AddFood = () => {

  const [formData, setFormData] = useState<FoodType>({
    _id: '',
    name: '',
    image: '',
    price: 0,
    category: '',
    description: '',
    quantity: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createFood(formData);
      
      toast.success("Yemek Başarıyla Eklendi", {
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
        name: '',
        image: '',
        price: 0,
        category: '',
        description: '',
        quantity: 0,
      });
      
    } catch (error) {
      console.error('Yemek eklenirken bir hata oluştu:', error);
      toast.error("Yemek Eklenirken Bir Hata Oluştu", {
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
        <h1 className="text-center text-white text-3xl mb-6 pb-2 border-b border-slate-500 font-semibold">Yemek Ekle</h1>
        <form className="flex flex-wrap justify-between" onSubmit={handleSubmit}>
            <input 
              className="w-[45%] p-5 mb-6 rounded-md bg-slate-900 text-white border-2 border-slate-500 outline-none" 
              type="text" 
              placeholder="Yemek Adı" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              className="w-[45%] p-5 mb-6 rounded-md bg-slate-900 text-gray-300 border-2 border-slate-500 outline-none" 
              type="text" 
              placeholder="Resim" 
              value={formData.image}
              onChange={handleChange}
              name="image" 
            />
            <input 
              className="w-[45%] p-5 mb-6 rounded-md bg-slate-900 text-white border-2 border-slate-500 outline-none" 
              type="number" 
              placeholder="Fiyat" 
              name="price" 
              value={formData.price}
              onChange={handleChange}
              required
            />
            <select 
              className="w-[45%] p-5 mb-6 rounded-md bg-slate-900 text-gray-300 font-light border-2 border-slate-500 outline-none" 
              name="category" 
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
                <option value="Tüm Yemekler">Kategori Seç</option>
                <option value="Burger">Burger</option>
                <option value="Pizza">Pizza</option>
                <option value="Tatlı">Tatlı</option>
            </select>
            <textarea 
              className="w-full p-5 mb-6 rounded-md bg-slate-900 text-white border-2 border-slate-500 outline-none" 
              name="description" 
              id="description" 
              rows={10} 
              placeholder="Açıklama"
              value={formData.description}
              onChange={handleChange}
            ></textarea> 
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

export default AddFood