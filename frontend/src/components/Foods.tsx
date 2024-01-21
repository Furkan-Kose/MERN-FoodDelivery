import { categories } from "../data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFoodToCart } from "../redux/cartSlice";
import { FoodType } from "../types";
import { DispatchType } from "../redux/store";
import { useEffect, useState } from "react";
import { getAllFoods } from "../services/foodService";
import { toast } from "react-toastify";

type FoodsProps = {
  selectedCategoryIndex: number;
}

const Foods = ({ selectedCategoryIndex }: FoodsProps) => {

  const selectedCategory = categories[selectedCategoryIndex];
  const dispatch = useDispatch<DispatchType>();

  const [filteredFoods, setFilteredFoods] = useState<FoodType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFoods({ category: selectedCategory.name });
        setFilteredFoods(response);
      } catch (error) {
        console.error('Veri alınamadı:', error);
      }
    };

    fetchData();
  }, [selectedCategory.name]);

  const handleClick = (food: FoodType) => {
    dispatch(addFoodToCart({ food, quantity: 1 }));
    toast.success(`${food.name} sepete eklendi!`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="bg-slate-200">
      {selectedCategoryIndex !== 0 && (
        <h2
          style={{
            background: 'linear-gradient(to right, white, rgb(249 115 22 / var(--tw-bg-opacity)), white)',
          }}
          className="text-3xl font-semibold p-4 text-white text-center"
        > 
          {selectedCategory.name}
        </h2>
      )}
      <div className="flex w-full overflow-hidden hover:overflow-x-auto p-4">
        <div className="flex gap-8">
          {filteredFoods.map((food) => (
            <div key={food._id} className="flex flex-col bg-white w-[250px] p-4 gap-2">
              <Link to={`/food/${food._id}`}>
                <img className="cursor-pointer" src={food.image} alt={food.name} />
              </Link>
              <h3 className="text-center text-xl font-medium">{food.name}</h3>
              <div className="flex justify-between items-center">
                <p>{food.price} $</p>
                <p>{food.category}</p>
              </div>
              <button onClick={() => handleClick(food)} className='bg-orange-500 w-2/3 py-2 px-4 rounded-xl text-white mx-auto'>Sepete Ekle</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;
