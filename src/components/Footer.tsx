import Image from 'next/image'
import React from 'react'
import Logo from '../assets/logoLight.svg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=' w-full base-background bg-gradient-to-bl pt-4 pb-8'>
      <div className=' layout'>
        <div className=' flex flex-wrap gap-6 justify-around items-center'>

          <div className=' flex gap-4'>
            <div><Image src={Logo.src} height="35px" width="35px"/></div>
            <div>
              <div className=' footer__title'>Mi Sides</div>
              <div className=' footer__link'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</div>
            </div>
          </div>

          <div className=' footer__wrap'>
            <div className=' footer__title'>Developers</div>
            <div className=' footer__link'>About Developer</div>
            <div className=' footer__link'>About Website</div>
          </div>
          <div className=' footer__wrap'>
            <div className=' footer__title'>Help</div>
            <div className=' footer__link'>Customer Support</div>
            <div className=' footer__link'>Contact</div>
          </div>
          <div className=' footer__wrap'>
            <div className=' footer__title'>Social</div>
            <div className=' footer__link'>Github</div>
            <div className=' footer__link'>Linkedin</div>
            <div className=' footer__link'>Twitter</div>
          </div>
          <div className=' footer__wrap'>
            <div className=' footer__title'>Legal</div>
            <div className=' footer__link'>Terms of Use</div>
            <div className=' footer__link'>Privacy Policy</div>
            <div className=' footer__link'>Legal Notice</div>
          </div>
          
        </div>
        <div className=' mt-12 flex justify-between text-sm text-shade '>
          <div>&#169; MiSides. All right reserved</div>
          <div>Skillfully crafted by Deadliners</div>
        </div>
      </div>
    </div>
  )
}

export default Footer