import { categories } from "../data"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllFoodsAsync } from "../redux/foodSlice"
import { RootState, DispatchType } from "../redux/store"
import { FoodType } from "../types"


const Foods = () => {

  // State değişkenleri
  const [category, setCategory] = useState<string>("")
  const [query, setQuery] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Tüm Yemekler")

  // Redux işlemleri için dispatch kullanımı
  const dispatch = useDispatch<DispatchType>();

  // react-router-dom'un useNavigate kancası
  const navigate = useNavigate();

  // URL parametrelerini almak için react-router-dom kullanımı
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");

  // Redux ile veri alımı
  const foods: FoodType[] = useSelector((state: RootState) => {
    if (search) {
      // Arama sonucunu filtrelemek
      return state.food.foods.filter((food: FoodType) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return state.food.foods;
  });
  
  // Redux durumları ve hata yakalama
  // const status = useSelector((state: RootState) => state.food.status)
  // const error = useSelector((state: RootState) => state.food.error)

  // Sayfa yüklendiğinde yemekleri almak için useEffect kullanımı
  useEffect(() => {
    dispatch(getAllFoodsAsync({ category, query }));
  }, [dispatch, category, query, search]);

   // Navbar'dan arama terimini al
    const searchTerm = useSelector((state: RootState) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("search") || '';
  });

  // Sayfa yenilendiğinde URL'den "search" ve "category" parametrelerini silmek için useEffect kullanımı
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("search");
    searchParams.delete("category");
    const newURL = location.pathname + "?" + searchParams.toString();
    window.history.replaceState(null, "", newURL);
  }, [location]);


   // Kategoriye tıklandığında bu işlev çalışır
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    navigate(`/foods?category=${categoryName}`);
  };

  // Kategoriye göre yemekleri filtreleme
  const filteredFoods = selectedCategory === "Tüm Yemekler" ? foods : foods.filter((food: FoodType) => food.category === selectedCategory);


  // Render
  return (
    <div className="flex">
      {/* Kategori bölümü */}
      <div className="w-1/5 bg-white text-center p-4">
        <h2 className="text-2xl font-semibold mb-4">Kategoriler</h2>
        {
          categories.map((category) => (
            <div
              key={category.id}
              className={`flex items-center justify-start py-1 px-2 space-x-3 mb-2 cursor-pointer rounded-lg ${
                selectedCategory === category.name ? "bg-orange-500 text-white" : "bg-slate-200"
              }`}
              onClick={() => handleCategoryClick(category.name)}
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
            </div>
          ))}
      </div>

      {/* Yemek Listesi */}
      <div className="w-4/5 p-4 flex flex-wrap gap-4 items-center"> { /* 37.satır */}
        {
          filteredFoods.map((food: FoodType) => (
            <div className="flex flex-col bg-white w-[14rem] p-4 gap-2" key={food.id}>
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