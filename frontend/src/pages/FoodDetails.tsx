import { useState } from "react"

const FoodDetails = () => {

    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

  return (
    <div className="flex p-8">
        <img className="w-1/2" src="https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1697023084~exp=1697026684~hmac=dd8607d103ec65051f5909fae0faa1475516448cf8d8c5d89f6f10c59d576bd0&w=900" alt="" />
        <div className="w-1/2 p-16">
            <h2 className="text-4xl font-semibold mb-4">Hamburger</h2>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam illo tenetur voluptates!</p>
            <p className="text-lg mb-4">Burger</p>
            <p className="text-lg mb-4">{quantity * 20} $</p>
            <div className="flex mb-4 items-center">
                <button onClick={decrement} className="text-bold text-red-500 bg-white w-8 h-8 text-xl rounded-lg" >-</button>
                <p className="text-lg mx-4">{quantity}</p>
                <button onClick={increment} className="text-bold text-green-500 bg-white w-8 h-8 text-xl rounded-lg" >+</button>
            </div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">Sepete Ekle</button>
        </div>
    </div>
  )
}

export default FoodDetails