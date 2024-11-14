import { footerData } from '@/data'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6'>
      <hr className="border-t border-[#C8C8C8] my-6" />
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4'>
        {/* Copyright and Links */}
        <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-20'>
          {/* First two items are copyright text */}
          <div className='flex flex-col text-primary text-[16px] leading-5 font-normal'>
            <span>{footerData[0]}</span>
            <span>{footerData[1]}</span>
          </div>
          
          {/* Remaining items are links */}
          <div className='grid grid-cols-2 gap-x-8 gap-y-3 text-[16px] leading-5 font-normal'>
            {footerData.slice(2).map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className='text-primary hover:text-gray-900 transition-colors'
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className='flex items-center gap-x-2'>
          <Image
            src="/assets/icons/tg.svg"
            alt="Telegram"
            width={44}
            height={44}
            className="transition-opacity hover:opacity-80"
          />
          <Image
            src="/assets/icons/vk.svg"
            alt="VKontakte"
            width={37}
            height={37}
            className="transition-opacity hover:opacity-80"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer