import React from 'react'
import { motion } from 'framer-motion'

import ServiceImage1 from '../assets/service1.png'
import ServiceImage2 from '../assets/service2.png'
import ServiceImage3 from '../assets/service3.png'
import type { StaticImageData } from 'next/image'

import { BsArrowRightShort } from 'react-icons/bs'

const titleAnimate = {
  offscreen: {
    y: -200,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1
    }
  }
}

const CardAnimate = {
  offscreen: {
    y: 200,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1
    }
  }
}

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
    <motion.div className='w-full min-h-screen base-background bg-gradient-to-bl pt-36 pb-12'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='layout'>
        <motion.div className='title__container' variants={titleAnimate}>
          <div className='sub__title'>Our services</div>
          <div className='title'>What we offer</div>
        </motion.div>
        <motion.div className='flex flex-wrap justify-center items-center mt-24 gap-12 md:gap-20 lg:gap-28'
          transition={{ staggerChildren: .3 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true}}
        >

          {ServiceDetail.map((service) => (
            <motion.div className=' w-[260px] aspect-[3/4] p-6 flex flex-col gap-6 text-center items-center service__card'
              variants={CardAnimate}

            >
              <div className='w-[50px] h-auto'><img src={service.icon.src} /></div>
              <div className=' font-semibold'>{service.name}</div>
              <div className=' text-sm text-shade md:text-base'>{service.desc}</div>
              <div className=' text-primary font-semibold flex gap-3 items-center group hover:text-primaryHover cursor-pointer transition-all duration-300 ease-out'>More <BsArrowRightShort className='text-2xl font-bold group-hover:translate-x-2 transition-all duration-300 ease-out' /></div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services