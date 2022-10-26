import React from 'react'
import HeaderImage from '../assets/HeaderImage.png';


const Header = () => {
  return (
    <div className='w-full h-screen base-background bg-gradient-to-tl'>
      <div className='layout'>
        <div className=' mix-blend-overlay opacity-60 absolute -left-[150px] sm:left-[15vw] md:left-[25vw] lg:left-[30vw] bottom-0 h-auto'><img className=' h-full max-h-[90vh] sm:max-h-[80vh]' src={HeaderImage.src}/></div>
        <div className='relative z-10 w-full min-h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <div className='w-[50px] h-[200px] border-[5px] border-primary'></div>
            <div className='text-center font-saira text-3xl tracking-[0.2em]'>BEAUTY <br /><span className='text-primary'>&</span>ELEGANT</div>
          </div>
          <div className='text-sm text-shade text-center absolute bottom-8'>Lorem ipsum dolor sit amet, consectetur adipiscing, magna aliqua.</div>
        </div>
      </div>
    </div>
  )
}

export default Header;