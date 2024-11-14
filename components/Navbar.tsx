import { navProfile } from '@/data'
import Image from 'next/image'
import React, { Fragment } from 'react'
import GradientButton from './Button'
import IconButton from './InformationCard/IconButton'

const Navbar = () => {
  return (
    <Fragment>
      <nav className='hidden md:block'>
        <section className='w-full px-6 py-4 flex justify-start gap-12 items-start bg-white'>
          <div className='flex flex-col gap-2'>
            <Image
              src="/assets/logo-am.png"
              alt="logo-animalmore"
              width={273}
              height={36}
              className="cursor-pointer object-cover"
            />
            <p className='text-primary font-semibold size-[16px] w-full text-start'>Все о ваших питомцах</p>
          </div>
          <div className='flex justify-between items-center w-full'>
            <div className='flex items-center gap-12 flex-1 max-w-3xl'>
              <GradientButton className='px-6 py-2 rounded-md flex items-center gap-2'>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                Каталог
              </GradientButton>
              <div className="max-w-md w-full relative bg-gradient-to-r from-[#D65AC9] to-[#F5D424] p-0.5 rounded-lg">
                <div className="relative bg-white rounded-lg">
                  <input
                    type="text"
                    placeholder="Найти питомца..."
                    className="w-full py-2 pl-4 pr-12 rounded-lg focus:outline-none placeholder:font-semibold placeholder:text-[16px] leading-[25.6px] placeholder:text-primary"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-4 h-5 text-[#79716B]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <IconButton
                icon="/assets/icons/fav.svg"
                alt="Favorites"
                width={29}
                height={29}
                className="transition-opacity hover:opacity-80 cursor-pointer"
              />
              <IconButton
                icon="/assets/icons/cart.svg"
                alt="Cart"
                width={28}
                height={28}
                className="transition-opacity hover:opacity-80 cursor-pointer"
              />
              <div className='flex items-center gap-x-2 cursor-pointer'>
                <Image
                  src={navProfile?.profile}
                  alt={`${navProfile?.name} account - Animalmore`}
                  width={40}
                  height={40}
                  className="rounded-xl object-cover"
                />
                <p className='font-medium text-[16px] leading-[25.6px] text-primary'>{navProfile?.name}</p>
              </div>
            </div>
          </div>


        </section>
      </nav>

      {/* Mobile navbar version */}
      <nav className='block md:hidden'>
      <section className='w-full flex justify-between  items-start bg-white gap-12'>
          <Image
            src="/assets/logo-am.png"
            alt="logo-animalmore"
            width={150}
            height={36}
            className="cursor-pointer object-cover"
          />
        <GradientButton className='px-6 py-2 rounded-md flex items-center gap-2'>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </GradientButton>
      </section>
      </nav>
    </Fragment>
  )

}

export default Navbar