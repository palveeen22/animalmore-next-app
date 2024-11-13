'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  'https://s3-alpha-sig.figma.com/img/20f4/c50d/67f3f972d2c6aa9273e5787ea05fdf6b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IE8HNknulWv5-L76J0mbH7dI2yPip63rDzxpMI5CKUfqkEGZRAwC-grQIKSFdldYcN3pQK1EryU5fMwwgfF-v4E9v~P4mMB5eiFhYpFbh66anjxkxqJUv-s0C9VSh5Z7WlMPC1EmLDEeqpxVkiO7gD6~f49478jnpY6gLJG2yHgwRjBNz~JG~D6NPTgEiC5EIKGjZia4B~xKI2z7kJnTmJdB8XkvN~enjPRajykD2W6AkBgozFlMwljFTyf5XfwpAPo00xk9svA7nPQ4nbBpnCSjL4fjDcaOCM2KSlIoXX7GPkmIV4HvGco-GeTCzeSST1MrWMkgnbx46Hucvj-IZQ__',
  'https://s3-alpha-sig.figma.com/img/20f4/c50d/67f3f972d2c6aa9273e5787ea05fdf6b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IE8HNknulWv5-L76J0mbH7dI2yPip63rDzxpMI5CKUfqkEGZRAwC-grQIKSFdldYcN3pQK1EryU5fMwwgfF-v4E9v~P4mMB5eiFhYpFbh66anjxkxqJUv-s0C9VSh5Z7WlMPC1EmLDEeqpxVkiO7gD6~f49478jnpY6gLJG2yHgwRjBNz~JG~D6NPTgEiC5EIKGjZia4B~xKI2z7kJnTmJdB8XkvN~enjPRajykD2W6AkBgozFlMwljFTyf5XfwpAPo00xk9svA7nPQ4nbBpnCSjL4fjDcaOCM2KSlIoXX7GPkmIV4HvGco-GeTCzeSST1MrWMkgnbx46Hucvj-IZQ__',
  'https://s3-alpha-sig.figma.com/img/20f4/c50d/67f3f972d2c6aa9273e5787ea05fdf6b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IE8HNknulWv5-L76J0mbH7dI2yPip63rDzxpMI5CKUfqkEGZRAwC-grQIKSFdldYcN3pQK1EryU5fMwwgfF-v4E9v~P4mMB5eiFhYpFbh66anjxkxqJUv-s0C9VSh5Z7WlMPC1EmLDEeqpxVkiO7gD6~f49478jnpY6gLJG2yHgwRjBNz~JG~D6NPTgEiC5EIKGjZia4B~xKI2z7kJnTmJdB8XkvN~enjPRajykD2W6AkBgozFlMwljFTyf5XfwpAPo00xk9svA7nPQ4nbBpnCSjL4fjDcaOCM2KSlIoXX7GPkmIV4HvGco-GeTCzeSST1MrWMkgnbx46Hucvj-IZQ__',
  'https://s3-alpha-sig.figma.com/img/20f4/c50d/67f3f972d2c6aa9273e5787ea05fdf6b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IE8HNknulWv5-L76J0mbH7dI2yPip63rDzxpMI5CKUfqkEGZRAwC-grQIKSFdldYcN3pQK1EryU5fMwwgfF-v4E9v~P4mMB5eiFhYpFbh66anjxkxqJUv-s0C9VSh5Z7WlMPC1EmLDEeqpxVkiO7gD6~f49478jnpY6gLJG2yHgwRjBNz~JG~D6NPTgEiC5EIKGjZia4B~xKI2z7kJnTmJdB8XkvN~enjPRajykD2W6AkBgozFlMwljFTyf5XfwpAPo00xk9svA7nPQ4nbBpnCSjL4fjDcaOCM2KSlIoXX7GPkmIV4HvGco-GeTCzeSST1MrWMkgnbx46Hucvj-IZQ__',
];

const ImageContentSide = () => {
  return (
    <div className="relative w-m mx-auto">
      {/* Custom Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-[30.44px] h-[30.44px] flex items-center justify-center rounded-full bg-white/80 shadow-md cursor-pointer hover:bg-white transition-colors swiper-button-prev">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none"
          className="rotate-180"
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

      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-[30.44px] h-[30.44px] flex items-center justify-center rounded-full bg-white/80 shadow-md cursor-pointer hover:bg-white transition-colors swiper-button-next">
        <svg 
          width="24" 
          height="24" 
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
