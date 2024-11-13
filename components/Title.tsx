import React from 'react'

type TProp = {
    text: string
}

const Title = ({text}: TProp) => {
  return (
    <h1 className='font-medium text-primary leading-[38.4px] text-[32px]'>
        {text}
    </h1>
  )
}

export default Title