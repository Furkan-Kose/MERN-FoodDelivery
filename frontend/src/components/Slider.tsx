import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <Swiper className='bg-black text-white h-[640px]'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, EffectCards]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      parallax={true}
      cardsEffect={{ slideShadows: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='bg-black flex items-center justify-center'>
        <img className='w-2/3 object-contain' src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg" alt="burger" />
        <div className='flex flex-col items-center justify-center text-white p-8 gap-y-8'>
          <h2 className='text-4xl font-semibold'>Lezzetin sınırlarını en iyi burgerlerle keşfedin.</h2>
          <button className='bg-orange-500 px-5 py-3 rounded-xl'>Menüyü İncele</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-700 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center text-white p-8 gap-y-8 ml-8'>
          <h2 className='text-4xl font-semibold'>Lezzetin sınırlarını aşan pizzaları keşfedin!</h2>
          <button className='bg-orange-500 px-5 py-3 rounded-xl'>Menüyü İncele</button>
        </div>
        <img 
className='w-2/3 object-contain' src="https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg" alt="pizza" />
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center bg-slate-400'>
        <img className='w-2/3 object-contain' src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg" alt="dessert" />
        <div className='flex flex-col items-center justify-center text-white p-8 gap-y-8 ml-8'>
            <h2 className='text-4xl font-semibold'>Lezzetin şahane finali: Tatlılarımız sizi büyüleyecek.</h2>
            <button className='bg-orange-500 px-5 py-3 rounded-xl'>Menüyü İncele</button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider