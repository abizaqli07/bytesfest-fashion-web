import React from 'react'
import ServiceImage1 from '../assets/service1.png'
import ServiceImage2 from '../assets/service2.png'
import ServiceImage3 from '../assets/service3.png'
import type { StaticImageData } from 'next/image'

import { BsArrowRightShort } from 'react-icons/bs'

type Props = {}

interface Details {
  name: String
  desc: String
  icon: StaticImageData
}

const Services = (props: Props) => {

  const ServiceDetail: Details[] = [
    {
      name: "Best Classified",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      icon: ServiceImage1
    },
    {
      name: "User Friendly",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      icon: ServiceImage2
    },
    {
      name: "Newest Trends",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      icon: ServiceImage3
    }
  ]

  return (
    <div className='w-full min-h-screen base-background bg-gradient-to-bl pt-20'>
      <div className='layout'>
        <div className='title__container'>
          <div className='sub__title'>Our services</div>
          <div className='title'>What we offer</div>
        </div>
        <div className='flex flex-wrap justify-center items-center mt-24 gap-8'>

          {ServiceDetail.map((service) => (
            <div className=' w-[260px] aspect-[3/4] p-6 flex bg-primaryDark flex-col gap-6 text-center items-center'>
            <div className='w-[50px] h-auto'><img src={service.icon.src}/></div>
            <div className=' font-semibold'>{service.name}</div>
            <div className=' text-sm text-shade'>{service.desc}</div>
            <div className=' text-primary font-semibold flex gap-3 items-center'>More <BsArrowRightShort className='text-2xl font-bold'/></div>
          </div> 
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Services