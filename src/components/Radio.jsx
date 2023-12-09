import React from 'react'

const Radio = ({ isMonthly, handleChangeMonthly }) => {
  return (
    <div 
    onClick={handleChangeMonthly}
    className='flex justify-center items-center gap-5 md:mt-10'
    >
        <h1 className={`${isMonthly ? 'text-Marineblue' : 'text-black'} font-bold`}>monthly</h1>
        <div className={`w-12 h-6 bg-Marineblue rounded-xl flex items-center ${isMonthly ? 'justify-start' : 'justify-end'} p-1`}><div className='w-4 h-4 bg-White rounded-full'/></div>
        <h1 className={`${isMonthly ? 'text-black' : 'text-Marineblue '} font-bold`}>yearly</h1>
      </div>
  )
}

export default Radio