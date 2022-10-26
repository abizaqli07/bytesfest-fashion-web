import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay} from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import NewsImage1 from '../assets/news1.png'

function NewsSwiper() {

  return (
    <div>
      <Swiper
        slidesPerView={1.1}
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
          <div className=' w-full h-auto min-h-[300px] max-h-[350px]  flex relative overflow-hidden'>
            <div className=' w-full h-full'><img src={NewsImage1.src} alt="" /></div>
            <div className=' base-background bg-gradient-to-r h-2/3 absolute bottom-0 flex flex-col gap-8 p-4'>
              <div className='text-xl font-semibold'>Outfit Trend</div>
              <div className=' text-shade'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit voluptates </div>
              <div className=' text-shade font-light'>-- 9 Oktober 2022</div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div >
  )
}

export default NewsSwiper