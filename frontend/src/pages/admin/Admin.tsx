import { useEffect, useState } from "react";
import { getAllFoods } from "../../services/foodService";
import { FoodType, UserType } from "../../types";
import { getAllUsers } from "../../services/userService";
import { Link } from "react-router-dom";


const Admin = () => {
  
  const [foods, setFoods] = useState<FoodType[]>([])
  const [users, setUsers] = useState<UserType[]>([])
  
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        console.error('Veri alınamadı:', error);
      }
    }
    fetchData()
  }, [])

  return (
    <div className="p-12 w-full">
      <h1 className="border-b border-slate-600 text-2xl text-white font-bold pb-2 mb-32">Admin Paneli</h1>
      <div className="flex gap-12 items-center justify-center">

        <div className="flex flex-col justify-between items-center w-1/3 bg-slate-900 p-12 h-64 border-2 border-slate-500 rounded-lg">
          <h1 className="text-center text-2xl text-white font-semibold">Kullanıcılar</h1>
          <p className="text-white font-light">Toplam Kullanıcı Sayısı: {users.length}</p>
          <Link to="/admin/users">
            <button className="bg-blue-500 px-4 py-2 text-white text-sm rounded-lg">Kullanıcılar Sayfası</button>
          </Link>
        </div>

        <div className="flex flex-col justify-between items-center w-1/3 bg-slate-900 p-12 h-64 border-2 border-slate-500 rounded-lg">
          <h1 className="text-center text-2xl text-white font-semibold">Yemekler</h1>
          <p className="text-white font-light">Toplam Yemek Sayısı: {foods.length}</p>
          <Link to="/admin/foods">
            <button className="bg-blue-500 px-4 py-2 text-white text-sm rounded-lg">Yemekler Sayfası</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Admin


