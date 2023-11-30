import React from 'react'

const Footer = ({ handleNextStep, handleGoBack }) => {
  return (
    <div className='absolute bottom-0 w-full flex justify-between items-center h-20 bg-White px-8 py-4 md:bg-transparent md:relative md:p-0 md:items-end'>
      <button onClick={handleGoBack}>go back</button>
      <button onClick={handleNextStep} className='bg-Marineblue text-White px-4 py-2 rounded-md font-bold capitalize'>next step</button>
    </div>
  )
}

export default Footer