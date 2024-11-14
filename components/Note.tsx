import React from 'react'

type TProp = {
    text: string
}

const Note = ({text}: TProp) => {
  return (
    <h3 className='font-medium text-center md:text-left text-primary leading-[12px] text-[12px]'>
        {text}
    </h3>
  )
}

export default Note