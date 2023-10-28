import { categories } from "../data"

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-semibold">Kategoriler</h2>
        <div className="flex items-center justify-center p-6 gap-6">
        {
          categories.map((category) => (
            <div key={category.id} className="bg-white rounded-full w-28 h-28 flex items-center justify-center flex-col cursor-pointer p-4">
              {category.image ? (
              <>
                <img className="object-contain w-14 h-14" src={category.image} alt={category.name} />
                <p className="text-sm text-center">{category.name}</p>
              </>
              ) : (
              <div className="flex items-center justify-center bg-orange-400 rounded-full px-4 py-6">
                <p className="text-sm text-center text-white">{category.name}</p>
              </div>
              )}
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Categories