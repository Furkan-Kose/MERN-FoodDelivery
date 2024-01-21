import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFoodFromCart, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const quantity = cart.foods.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveFood = (foodId: string) => {
    const food = cart.foods.find((item) => item._id === foodId);
    if (food) {
      dispatch(removeFoodFromCart({ id: foodId, quantity: food.quantity }));
    }
  };

  const handleDecreaseQuantity = (foodId: string) => {
    const food = cart.foods.find((item) => item._id === foodId);
    if (food && food.quantity > 1) {
      dispatch(updateQuantity({ id: foodId, quantity: food.quantity - 1 }));
    }
  };

  const handleIncreaseQuantity = (foodId: string) => {
    const food = cart.foods.find((item) => item._id === foodId);
    if (food) {
      dispatch(updateQuantity({ id: foodId, quantity: food.quantity + 1 }));
    }
  };

  return (
    <div className="flex max-w-[1440px] min-h-[630px] bg-slate-200 mx-auto">
      <div className="w-3/5 bg-white py-8 px-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Sepet</h2>
          <span className="text-xl">{quantity} Yemek</span>
        </div>
        <hr />

        <div>
          {cart.foods.map((food) => (
            <>
            <div className="flex justify-between items-center mt-8" key={food._id}>
              <div className="flex items-center">
                <img className="w-24" src={food.image} alt={food.name} />
                <div className="ml-4">
                  <h3 className="text-lg">{food.name}</h3>
                  <p className="text-sm">{food.category}</p>
                </div>
              </div>
              <div className="flex items-center border border-orange-500 py-[0.2rem] px-2 rounded-full">
                <button onClick={() => handleDecreaseQuantity(food._id)} className="text-bold text-orange-500 bg-white w-8 h-8 text-xl rounded-lg">-</button>
                <p className="text-lg mx-4 bg-orange-500 rounded-full px-2 text-white">{food.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(food._id)} className="text-bold text-green-500 bg-white w-8 h-8 text-xl rounded-lg">+</button>
              </div>
              <div className="flex items-center text-lg">{food.price * food.quantity} $</div>
              <button onClick={() => handleRemoveFood(food._id)} className="bg-orange-500 text-white py-2 px-4 rounded-lg"><AiOutlineDelete /></button>
            </div>
            <hr />
            </>
          ))}
        </div>
      </div>

      <div className="w-2/5 py-8 px-16 flex flex-col justify-center">
        <h2 className="text-xl mb-4 border-b border-white py-4">Sipariş Özeti</h2>
        {cart.foods.map((food) => (
          <div className="flex justify-between items-center mb-4" key={food._id}>
            <p>{food.name} ({food.quantity})</p>
            <p>$ {food.price} * {food.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4 border-t border-white py-4">
          <p>Toplam:</p>
          <p>$ {cart.totalPrice}</p>
        </div>
        <button className="bg-orange-500 text-white py-3 px-4 rounded-lg mt-4 w-full">Sipariş Ver</button>
      </div>
    </div>
  );
};

export default Cart;
