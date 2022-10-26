import React from 'react'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div className=' w-full min-h-screen base-background bg-gradient-to-tr pt-20'>
      <div className=' layout flex flex-col justify-center gap-20'>
        <div className=' text-3xl font-semibold'>Contact us</div>
        <div className=' flex flex-col gap-6 w-full max-w-[600px]'>

          <input type="text" name='name' id='name' className=' form__input' placeholder='Your Name'/>
          <input type="email" name='email' id='email' className=' form__input' placeholder='Your Email Address'/>
          <input type="text" name='message' id='message' className=' form__input' placeholder='Your Message'/>

        </div>
        <div className=' py-3 px-8 text-center bg-primary text-xl text-black font-medium cursor-pointer hover:bg-primaryHover transition-all duration-300 ease-out rounded-full'>Submit</div>
      </div>
    </div>
  )
}

export default ContactUs