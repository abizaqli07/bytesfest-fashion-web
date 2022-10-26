import React from 'react'
import HeaderImage from '../assets/HeaderImage.png';


const Header = () => {
  return (
    <div className='w-full h-screen base-background bg-gradient-to-tl'>
      <div className='layout'>
        <div className=' mix-blend-overlay opacity-60 absolute -left-[150px] sm:left-[15vw] md:left-[25vw] lg:left-[30vw] bottom-0 h-auto'><img className=' h-full max-h-[90vh] sm:max-h-[80vh]' src={HeaderImage.src} /></div>
        <div className='relative z-10 w-full min-h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <div className='w-[50px] h-[200px] border-[5px] border-primary'></div>
            <div className='text-center font-saira text-3xl tracking-[0.2em]'>BEAUTY <br /><span className='text-primary'>&</span>ELEGANT</div>
          </div>
          <div className='text-sm text-shade text-center absolute bottom-8 sm:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing, magna aliqua.</div>
          <div className=' hidden sm:flex absolute bottom-4 gap-8 right-12'>
            <div className=' footer__wrap'>
              <div className=' footer__title'>Follow Us</div>
              <div className=' footer__link'>@MiSides.business</div>
              <div className=' footer__link'>MiSides.com</div>
            </div>
            <div className=' footer__wrap'>
              <div className=' footer__title'>Get in Touch</div>
              <div className=' footer__link'>misides.business@gmail.com</div>
              <div className=' footer__link'>+00 81903 19102</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;