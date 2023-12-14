import React from 'react'

const Footer = () => {

  //TODO: add footer functionality

  return (
    <div className='absolute left-0 bottom-0 w-full flex justify-between bg-White p-5 md:relative md:mt-auto md:pr-0'>
        <input type="button" value='go back'/>
        <input type="submit" value='next step' className='bg-Marineblue text-White p-4 rounded-xl capitalize font-bold'/>
      </div>
  )
}

export default Footer