import React from 'react'

type TProp = {
text: string
}

const Paragraph = ({text}: TProp) => {
  return (
    <p className='font-normal text-[18px] leading-[22.5px] text-primary text-left w-xxl'>
        {text}
    </p>
  )
}

export default Paragraph