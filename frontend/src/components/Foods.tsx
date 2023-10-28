import { categories, foods } from "../data"
import { Link } from "react-router-dom";

interface FoodsProps {
    selectedCategoryIndex: number;
}

const Foods = ({selectedCategoryIndex}: FoodsProps) => {

    const selectedCategory = categories[selectedCategoryIndex]

  return (
    <div className="bg-slate-200">
        <h2 
          style={{
            background: 'linear-gradient(to right, white, rgb(249 115 22 / var(--tw-bg-opacity)), white)'
          }} 
          className="text-3xl font-semibold p-4  text-white text-center"
        >
          {selectedCategory.name}
        </h2>
        <div className="flex w-full gap-8 flex-wrap p-4">
          {
            foods.map((food) => (
              <>
                {food.category === selectedCategory.name && (
                  <div key={food.id} className="flex flex-col bg-white w-1/6 p-4 gap-2">
                    <Link to="/food/1">
                      <img className="cursor-pointer" src={food.image} alt={food.name} />
                    </Link>
                    <h3 className="text-center text-xl font-medium">{food.name}</h3>
                    <div className="flex justify-between items-center">
                      <p>{food.price} $</p>
                      <p>{food.category}</p>
                    </div>
                    <button className='bg-orange-500 w-2/3 py-2 px-4 rounded-xl text-white mx-auto'>Sepete Ekle</button>
                  </div>
                )}
              </>
            ))
          }
        </div>
      </div>
  )
}

export default Foods