import React from 'react'
import AboutImage from '../assets/about.png'

import { BsArrowRightShort } from 'react-icons/bs'

type Props = {}

const About = (props: Props) => {
  return (
    <div className=' w-full min-h-screen base-background bg-gradient-to-br pt-20 pb-20'>
      <div className=' layout flex flex-col gap-y-20'>
        <div className='flex flex-col justify-center items-start relative w-fit mx-auto'>
          <div className=' w-[250px] aspect-[3/4] overflow-hidden relative z-10'><img className=' w-full' src={AboutImage.src} /></div>
          <div className=' w-full h-full absolute border-primary border-[8px] top-6 -right-6'></div>
        </div>

        <div className='flex flex-col gap-8 text-center'>
          <div className=' font-sendFlower text-5xl'>Find your true beauty</div>
          <div className=' text-sm text-shade'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre</div>
          <div className=' flex flex-col gap-6 justify-center items-center'>
            <div className=' py-1 px-8 bg-primary text-black w-fit font-medium flex items-center gap-2'>Learn more <BsArrowRightShort className=' text-2xl'/></div>
            <div className=' py-1 px-8 border-primary border-2 w-fit font-medium flex items-center gap-2'>Contact us <BsArrowRightShort className=' text-2xl'/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About