'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { images } from '@/data';



const ImageContentSide = () => {
  return (
    <div className="relative w-full md:w-m mx-auto">
     <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer hover:bg-white/80 transition-colors swiper-button-prev">
      <svg 
        width="15" 
        height="15" 
        viewBox="0 0 24 24" 
        fill="none"
      >
        <path 
          d="M15 18L9 12L15 6" 
          stroke="black" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>

    <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer hover:bg-white/80 transition-colors swiper-button-next">
      <svg 
        width="15" 
        height="15" 
        viewBox="0 0 24 24" 
        fill="none"
      >
        <path 
          d="M9 18L15 12L9 6" 
          stroke="black" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[4/3]">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 mt-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageContentSide
