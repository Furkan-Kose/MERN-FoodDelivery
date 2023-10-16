import { categories } from "../data"

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-semibold">Kategoriler</h2>
        <div className="flex items-center justify-center p-6 gap-6">
        {
            categories.map((category) => (
                <div key={category.id} className="bg-white rounded-full w-24 h-24 flex items-center justify-center flex-col cursor-pointer">
                    <img className="object-contain w-12 h-12" src={category.image} alt={category.name} />
                    <p>{category.name}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Categories