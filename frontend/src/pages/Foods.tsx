import { categories } from "../data"
// import { foods } from "../data"
import { Link } from "react-router-dom"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllFoodsAsync } from "../redux/foodSlice"
import { RootState } from "../redux/store"
import { DispatchType } from "../redux/store"
import { FoodType } from "../types"

const Foods = () => {

  const dispatch = useDispatch<DispatchType>();

  const foods = useSelector((state: RootState) => state.food.foods)

  useEffect(() => {
    dispatch(getAllFoodsAsync())
  }, [dispatch])

  return (
    <div className="flex">
      <div className="w-1/5 bg-white text-center p-4">
        <h2 className="text-2xl font-semibold mb-4">Kategoriler</h2>
        {
          categories.map((category) => (
            <div key={category.id} className="flex items-center justify-start bg-slate-200 py-1 px-2 space-x-3 mb-2 cursor-pointer">
              <img className="w-8" src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))
        }

      </div>

      <div className="w-4/5 p-4 flex flex-wrap gap-4 items-center justify-center">
        {
          foods.map((food: FoodType) => (
            <div className="flex flex-col bg-white w-[14rem] p-4 gap-2">
              <Link to={`/food/${food.id}`}>
                <img className="cursor-pointer" src={food.image} alt={food.name} />
              </Link>
              <h3 className="text-center text-xl font-medium">{food.name}</h3>
              <div className="flex justify-between items-center">
                <p>{food.price} $</p>
                <p>{food.category}</p>
              </div>
              <button className='bg-orange-500 w-2/3 py-2 px-4 rounded-xl text-white mx-auto'>Sepete Ekle</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Foods