import Image from 'next/image'
import React from 'react'

interface SelfInfo {
    status: string;
    experience: string;
    profession: string
  }
  

const SelfInfo = ({status, experience, profession}: SelfInfo) => {
  return (
    <div className='flex justify-start gap-4 items-center'>
            <Image
              src="/assets/gem.png"
              alt="Favorite"
              width={44}
              height={44}
              className="transition-colors duration-200"
            />
            <div className='flex flex-col justify-start gap-1'>
              <p className='font-medium text-[24.97px] leading-[24.97px] text-primary'>{status}</p>
              <span className='flex items-center gap-x-2'>
                <p className='font-medium text-[16px] leading-[16px] text-primary'>{experience}</p>
                <span className='text-primary'>,</span>
                <p className='font-medium text-[16px] leading-[16px] text-primary'>{profession}</p>
              </span>
            </div>
          </div>
  )
}

export default SelfInfo