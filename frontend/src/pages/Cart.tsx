import { AiOutlineDelete } from 'react-icons/ai'
import { useState } from 'react'

const Cart = () => {

  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="flex">
      <div className="w-3/5 bg-white py-8 px-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Sepet</h2>
          <span className="text-xl">4 Yemek</span>
        </div>
        <hr />

        <div>
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center">
              <img className="w-24" src="https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1697023084~exp=1697026684~hmac=dd8607d103ec65051f5909fae0faa1475516448cf8d8c5d89f6f10c59d576bd0&w=900" alt="" />
              <div className="ml-4">
                <h3 className="text-lg">Hamburger</h3>
                <p className="text-sm">Burger</p>
              </div>
            </div>
            <div className="flex items-center border border-orange-500 py-[0.2rem] px-2 rounded-full">
              <button onClick={decrement} className="text-bold text-orange-500 bg-white w-8 h-8 text-xl rounded-lg" >-</button>
              <p className="text-lg mx-4 bg-orange-500 rounded-full px-2 text-white">{quantity}</p>
              <button onClick={increment} className="text-bold text-green-500 bg-white w-8 h-8 text-xl rounded-lg" >+</button>
            </div>
            <div className="flex items-center text-lg">{quantity * 20} $</div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg"><AiOutlineDelete/></button>
          </div>
          <hr />

          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center">
              <img className="w-24" src="https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1697023084~exp=1697026684~hmac=dd8607d103ec65051f5909fae0faa1475516448cf8d8c5d89f6f10c59d576bd0&w=900" alt="" />
              <div className="ml-4">
                <h3 className="text-lg">Hamburger</h3>
                <p className="text-sm">Burger</p>
              </div>
            </div>
            <div className="flex items-center border border-orange-500 py-[0.2rem] px-2 rounded-full">
              <button onClick={decrement} className="text-bold text-orange-500 bg-white w-8 h-8 text-xl rounded-lg" >-</button>
              <p className="text-lg mx-4 bg-orange-500 rounded-full px-2 text-white">{quantity}</p>
              <button onClick={increment} className="text-bold text-green-500 bg-white w-8 h-8 text-xl rounded-lg" >+</button>
            </div>
            <div className="flex items-center text-lg">{quantity * 20} $</div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg"><AiOutlineDelete/></button>
          </div>
          <hr />

          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center">
              <img className="w-24" src="https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1697023084~exp=1697026684~hmac=dd8607d103ec65051f5909fae0faa1475516448cf8d8c5d89f6f10c59d576bd0&w=900" alt="" />
              <div className="ml-4">
                <h3 className="text-lg">Hamburger</h3>
                <p className="text-sm">Burger</p>
              </div>
            </div>
            <div className="flex items-center border border-orange-500 py-[0.2rem] px-2 rounded-full">
              <button onClick={decrement} className="text-bold text-orange-500 bg-white w-8 h-8 text-xl rounded-lg" >-</button>
              <p className="text-lg mx-4 bg-orange-500 rounded-full px-2 text-white">{quantity}</p>
              <button onClick={increment} className="text-bold text-green-500 bg-white w-8 h-8 text-xl rounded-lg" >+</button>
            </div>
            <div className="flex items-center text-lg">{quantity * 20} $</div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg"><AiOutlineDelete/></button>
          </div>
          <hr />

          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center">
              <img className="w-24" src="https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1697023084~exp=1697026684~hmac=dd8607d103ec65051f5909fae0faa1475516448cf8d8c5d89f6f10c59d576bd0&w=900" alt="" />
              <div className="ml-4">
                <h3 className="text-lg">Hamburger</h3>
                <p className="text-sm">Burger</p>
              </div>
            </div>
            <div className="flex items-center">
              <button onClick={decrement} className="text-bold text-orange-500 bg-white w-8 h-8 text-xl rounded-lg" >-</button>
              <p className="text-lg mx-4">{quantity}</p>
              <button onClick={increment} className="text-bold text-green-500 bg-white w-8 h-8 text-xl rounded-lg" >+</button>
            </div>
            <div className="flex items-center text-lg">{quantity * 20} $</div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg"><AiOutlineDelete/></button>
          </div>
          <hr />
        </div>

      </div>

      <div className="w-2/5 py-8 px-16 flex flex-col justify-center">
        <h2 className="text-xl mb-4 border-b border-white py-4">Sipariş Özeti</h2>
        <div className="flex justify-between items-center mb-4">
          <p>Hamburger (x3)</p>
          <p>$30</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Pizza (x2)</p>
          <p>$20</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Tatlı (x1)</p>
          <p>$10</p>
        </div>
        <div className="flex justify-between items-center mt-4 border-t border-white py-4">
          <p>Toplam:</p>
          <p>$60</p>
        </div>
        <button className="bg-orange-500 text-white py-3 px-4 rounded-lg mt-4 w-full">Sipariş Ver</button>
      </div>

    </div>
  )
}

export default Cart