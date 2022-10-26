import React from 'react'
import NewsSwiper from './NewsSwiper'

type Props = {}

const News = (props: Props) => {
  return (
    <div className=' w-full min-h-screen base-background bg-gradient-to-bl pt-20'>
      <div className='layout'>
        <div className=' title__container'>
          <div className=' sub__title'>Newest news</div>
          <div className=' title'>Keepup With Fashion</div>
        </div>

        <div className='mt-20'>
          <NewsSwiper/>
        </div>
      </div>
    </div>
  )
}

export default News