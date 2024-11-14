import React from 'react'

type TProp = {
text: string
}

const Paragraph = ({text}: TProp) => {
  return (
    <p className='font-normal text-sm md:text-[18px] leading-[22.5px] text-primary text-justify md:text-left w-full md:w-xxl'>
        {text}
    </p>
  )
}

export default Paragraph