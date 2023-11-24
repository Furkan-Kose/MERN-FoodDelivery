import { categories } from "../data";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodsAsync } from "../redux/foodSlice";
import { RootState, DispatchType } from "../redux/store";
import { FoodType } from "../types";
import { addFoodToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Foods = () => {
  const dispatch = useDispatch<DispatchType>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = searchParams.get("category") || "Tüm Yemekler";
  const searchQuery = searchParams.get("search");

  const foods: FoodType[] = useSelector((state: RootState) => state.food.foods);

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

  useEffect(() => {
    const categoryParam = selectedCategory === "Tüm Yemekler" ? '' : selectedCategory;
    dispatch(getAllFoodsAsync({ category: categoryParam, query: searchQuery! }));
  }, [dispatch, selectedCategory, searchQuery]);

  const filteredFoods = foods.filter((food) => {
    const categoryFilter = selectedCategory === "Tüm Yemekler" || food.category === selectedCategory;
    const searchFilter = !searchQuery || food.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryFilter && searchFilter;
  });

  return (
    <div className="flex">
      {/* Kategori bölümü */}
      <div className="w-1/5 bg-white text-center p-4">
        <h2 className="text-2xl font-semibold mb-4">Kategoriler</h2>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/foods?category=${category.name}`}
            className={`flex items-center justify-start py-1 px-2 space-x-3 mb-2 cursor-pointer rounded-lg ${
              selectedCategory === category.name ? "bg-orange-500 text-white" : "bg-slate-200"
            }`}
          >
            {category.image ? (
              <>
                <img className="w-8 h-8" src={category.image} alt={category.name} />
                <p>{category.name}</p>
              </>
            ) : (
              <div className="h-8 flex items-center ml-4">
                <p>{category.name}</p>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Yemek Listesi */}
      <div className="w-4/5 p-4 flex flex-wrap gap-4 items-center">
        {filteredFoods.map((food: FoodType) => (
          <div className="flex flex-col bg-white w-[14rem] p-4 gap-2" key={food._id}>
            <Link to={`/food/${food._id}`}>
              <img className="cursor-pointer" src={food.image} alt={food.name} />
            </Link>
            <h3 className="text-center text-xl font-medium">{food.name}</h3>
            <div className="flex justify-between items-center">
              <p>{food.price} $</p>
              <p>{food.category}</p>
            </div>
            <button onClick={() => handleClick(food)} className="bg-orange-500 w-2/3 py-2 px-4 rounded-xl text-white mx-auto">
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
