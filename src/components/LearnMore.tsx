import React from 'react'

type Props = {}

const LearnMore = (props: Props) => {
  return (
    <div className=' w-full min-h-screen base-background bg-gradient-to-tr relative'>
      <div className=' absolute w-full h-full learn__background md:w-[50%] overflow-hidden'>
        <div className=' text-white font-black text-8xl sm:text-9xl mix-blend-overlay opacity-30'>DEFINE <br /> YOUR <br /> STYLE</div>
      </div>

      <div className=' layout relative z-[1] pt-20 w-full md:right-0'>
        <div className=' w-full h-full flex flex-col gap-44 text-center md:text-right'>
          <div className=' font-sendFlower text-5xl '>Find Your Confident</div>
          <div className=' flex flex-col gap-8 justify-end items-end'>
            <div className=' text-slate-200'>Freestyle with minimalist outfit.</div>
            <div className=' text-shade text-sm md:max-w-[40%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </div>
          </div>
        </div>
      </div>

      <div className=' relative z-[2] w-fit ml-auto mt-24 text-white font-semibold text-lg pr-12 pb-2 border-b-2 border-primary'>Start explore now</div>
    </div>
  )
}

export default LearnMore