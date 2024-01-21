import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FoodType } from "../../types"
import { getAllFoods, deleteFood } from "../../services/foodService"
import { toast } from "react-toastify"


const AdminFoods = () => {

  const [foods, setFoods] = useState<FoodType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFoods({});
        setFoods(response);
      } catch (error) {
        console.error('Veri alınamadı:', error);
      }
    }
    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await deleteFood(id);
      
      const response = await getAllFoods({});
      setFoods(response);

      toast.success("Yemek Başarıyla Silindi!", {
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
      console.error('Yemek silinirken bir hata oluştu:', error);
      toast.error("Yemek Silinirken Bir Hata Oluştu!", {
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

  const totalPages = Math.ceil(foods.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-2 py-1 px-3 rounded-md ${
            i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          } font-medium`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="p-12 w-full">
      <div className="flex justify-between items-center border-b border-slate-600 pb-2 mb-4">
        <h1 className="text-white text-2xl font-bold">Yemekler</h1>
        <Link to="/admin/foods/add">
          <button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg">
            Yemek Ekle
          </button>
        </Link>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left text-white py-2">Yemek Adı</th>
            <th className="text-left text-white py-2">Açıklama</th>
            <th className="text-left text-white py-2">Kategori</th>
            <th className="text-left text-white py-2">Fiyat</th>
            <th className="text-left text-white py-2">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {foods
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((food) => (
            <tr key={food._id} className="text-white font-light">
              <td className="py-2">
                <div className="flex items-center gap-4">
                  <img src={food.image} alt={food.name} width={40} height={40} className="object-cover rounded-full"/>
                  {food.name}
                </div>
              </td>
              <td className="py-2">{food.description.substring(0, 25)}...</td>
              <td className="py-2">{food.category}</td>
              <td className="py-2">${food.price}</td>
              <td className="py-2">
                <div className="flex gap-4">
                  <Link to={`/admin/foods/${food._id}`}>
                    <button className="py-1 px-3 rounded-md bg-green-500 text-xs font-medium">Güncelle</button>
                  </Link>
                  <button 
                    className="py-1 px-3 rounded-md bg-red-500 text-xs font-medium"
                    onClick={() => handleDelete(food._id)}
                  >
                    Sil
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4">
          {renderPageNumbers()}
        </div>
      )}

    </div>
  )
}

export default AdminFoods