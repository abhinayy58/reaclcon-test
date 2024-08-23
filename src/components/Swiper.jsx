import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Swiper = () => {
    const swiperImage = [
        {
            id:1,
            src:"/club-1.svg"
        },
        {
            id:2,
            src:"/club-2.svg"
        },
        {
            id:3,
            src:"/club-3.svg"
        },
        {
            id:4,
            src:"/club-4.svg"
        },
        {
            id:5,
            src:"/club-5.svg"
        },
        {
            id:6,
            src:"/club-6.svg"
        },
        {
            id:7,
            src:"/club-7.svg"
        }
    ]
  return (
    <div className='items-center flex flex-col py-10'>
        <p className='italic-font text-[58px] leading-[57px] text-[#FFF2D0]'>Gallery</p>
        <Carousel showStatus={false} showIndicators={false} showThumbs={false} className='h-full pt-10'>
            {
                swiperImage?.map((item) => (
                    <div key={item.id}>
                    <img src={item.src} />
                </div>
                ))
            }
             
                
            </Carousel>
    </div>
  )
}

export default Swiper