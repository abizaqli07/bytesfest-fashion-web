import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay} from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import NewsImage1 from '../assets/news1.png'
import { BiRightArrow } from 'react-icons/bi'

function NewsSwiper() {

  return (
    <div>
      <Swiper
        slidesPerView={1.1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
        }}
        spaceBetween={80}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="newsswiper"
      >

        <SwiperSlide>
          <div className=' w-full h-auto min-h-[300px] xsm:min-h-[250px] max-h-[350px] xsm:max-h-[300px] xsm:max-w-[500px]  flex relative overflow-hidden hover:neu-flat transition-all duration-300 ease-in-out'>
            <div className=' w-full h-full'><img src={NewsImage1.src} alt="" /></div>
            <div className=' base-background bg-gradient-to-r h-2/3 xsm:h-full xsm:w-[60%] absolute bottom-0 flex flex-col gap-8 p-4 xsm:hover:w-[90%] xsm:hover:rounded-r-[500px] group transition-all duration-500 ease-in-out'>
              <div className='text-xl font-semibold'>Outfit Trend</div>
              <div className=' text-shade max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit voluptates </div>
              <div className=' text-shade font-light'>-- 9 Oktober 2022</div>
              <div className=' w-fit py-2 px-2 bg-white rounded-full text-4xl text-primary absolute xsm:-right-12 xsm:top-[50%] xsm:translate-y-[-50%] opacity-0 xsm:group-hover:opacity-100 xsm:group-hover:right-6 transition-all duration-300 ease-in-out cursor-pointer'><BiRightArrow/></div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div >
  )
}

export default NewsSwiper