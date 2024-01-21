import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCart } from '../redux/cartSlice';
import { useLocation } from 'react-router-dom';
import { DispatchType } from '../redux/store';
import { FoodType } from '../types';
import { toast } from 'react-toastify';
import { getFoodById } from '../services/foodService';

const FoodDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [food, setFood] = useState<FoodType | null>(null);
  const location = useLocation();
  const foodId = location.pathname.split('/')[2];
  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFoodById(foodId);
        setFood(response);
      } catch (error) {
        console.error('Veri alınamadı:', error);
      }
    }

    fetchData();
  }, [foodId]);

  const handleQuantity = (type: 'dec' | 'inc') => {
    if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'inc') {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if (food) {
      dispatch(addFoodToCart({ food, quantity }));
      toast.success(`${food.name} sepete eklendi!`, {
        position: "bottom-right",
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
    <div className="flex p-8 max-w-[1440px] bg-slate-200 mx-auto">
      {food && (
        <img className="w-1/2" src={food.image} alt={food.name} />
      )}
      <div className="w-1/2 p-16">
        {food && (
          <>
            <h2 className="text-4xl font-semibold mb-4">{food.name}</h2>
            <p className="text-lg mb-4">{food.description}</p>
            <p className="text-lg mb-4">{food.category}</p>
            <p className="text-lg mb-4">{quantity * food.price} $</p>
          </>
        )}
        <div className="flex mb-4 items-center">
          <button onClick={() => handleQuantity('dec')} className="text-bold text-red-500 bg-white w-8 h-8 text-xl rounded-lg">-</button>
          <p className="text-lg mx-4">{quantity}</p>
          <button onClick={() => handleQuantity('inc')} className="text-bold text-green-500 bg-white w-8 h-8 text-xl rounded-lg">+</button>
        </div>
        {food && (
          <button onClick={handleClick} className="bg-orange-500 text-white py-2 px-4 rounded-lg">Sepete Ekle</button>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
