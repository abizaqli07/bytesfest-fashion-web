import React from 'react'
import Minim from '../assets/MINIMALIST.png'

type Props = {}

const Interupt = (props: Props) => {
  return (
    <div className=' w-full min-h-screen base-background bg-gradient-to-tl pt-20 overflow-hidden'>
      <div className='layout flex flex-col gap-24'>
        <div className=' relative'>
          <div className=' text-9xl mix-blend-overlay opacity-80 w-full'><img className=' h-[100px] md:h-[150px] lg:h-[200px] w-[90%] lg:w-[80%] mx-auto' src={Minim.src}/></div>
          <div className=' absolute text-5xl top-0 left-0 w-full h-full font-sendFlower flex justify-center items-center'>Stay Elegant</div>
        </div>
        <div className=' text-center text-sm text-shade'>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut magna aliqua. Ut enim ad minim </div>
        <div className=' text-center text-sm flex flex-col gap-8'>
          <div className=' text-shade'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris</div>
          <div className=' text-slate-200'>nisi ut aliquip ex ea commodo consequat. dolor in reprehenderit in voluptate velit </div>
        </div>
      </div>
    </div>
  )
}

export default Interupt