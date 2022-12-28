import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-green px-5 py-3 tracking-wider rounded-lg text-white font-regular text-xs'>{text}</button>
  )
}

export default Button