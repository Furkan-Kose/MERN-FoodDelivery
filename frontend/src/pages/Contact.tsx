import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className="flex max-w-[1440px] min-h-[630px] bg-slate-200 mx-auto">
      <div className="w-1/2 bg-white flex justify-center flex-col p-32">
        <h2 className="text-2xl font-semibold mb-4">İletişime Geçin</h2>
        <p className='text-sm font-thin mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem earum dolorum non explicabo excepturi provident.</p>
        <div className='flex items-center gap-4 my-2'>
          <div className='bg-slate-200 rounded-full p-2'>
            <CiLocationOn/>
          </div>
          <p>İstanbul, Türkiye</p>
        </div>
        <div className='flex items-center gap-4 my-2'>
          <div className='bg-slate-200 rounded-full p-2'><BsTelephone/></div>
          <p>0532 000 00 00</p>
        </div>
        <div className='flex items-center gap-4 my-2'>
          <div className='bg-slate-200 rounded-full p-2'>
            <AiOutlineMail/>
          </div>
          <p>example@gmail.com</p>
        </div>
      </div>
      <div className="w-1/2 bg-slate-200">
        <form className='flex flex-col p-32'>
          <h2 className="text-2xl font-semibold mb-4">İletişime Geçin</h2>
          <input type="text" placeholder='Adınız' className='border-2 border-gray-200 p-2 mb-4 outline-none rounded-lg'/>
          <input type="text" placeholder='Soyadınız' className='border-2 border-gray-200 p-2 mb-4 outline-none rounded-lg'/>
          <input type="text" placeholder='E-posta Adresiniz' className='border-2 border-gray-200 p-2 mb-4 outline-none rounded-lg'/>
          <textarea placeholder='Mesajınız' className='border-2 border-gray-200 p-2 mb-4 outline-none rounded-lg'/>
          <button className='bg-orange-500 text-white py-2 px-4 rounded-full'>Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default Contact