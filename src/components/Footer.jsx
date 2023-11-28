import React from 'react'

const Footer = ({handleNextStep, handlePrevStep}) => {

  return (
    <footer className='absolute bottom-0 bg-White w-full h-20 flex justify-between px-4 mx-auto'>
        <button onClick={handlePrevStep}>Go Back</button>
        <button onClick={handleNextStep} className='text-White bg-Marineblue px-4 my-4 font-bold rounded-lg'>Next Step</button>
      </footer>
  )
}

export default Footer