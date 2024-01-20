import React, { useContext } from 'react'
import { footerContext } from '../App'

const Footer = () => {

  const { activePage, handleNextStep, handleGoBack } = useContext(footerContext)

  let activeId = activePage.filter((page) => {
    if(page.isActive) {
      return true
    }
  })


  return (
    <div className='absolute left-0 bottom-0 w-full flex justify-between bg-White p-5 md:relative md:mt-auto md:pr-0'>
        <input type="button" onClick={() => handleGoBack(activeId[0].id)} value='go back' className='cursor-pointer'/>
        {activeId[0].id === 0 && <input type="submit" value='next step' className='bg-Marineblue text-White p-4 rounded-xl capitalize font-bold cursor-pointer'/>}
        {activeId[0].id !== 0  && <input type="button" onClick={() => handleNextStep(activeId[0].id)} value={activeId[0].id === 3 ? 'confirm' : 'next step'} className='bg-Marineblue text-White p-4 rounded-xl capitalize font-bold cursor-pointer'/>}
      </div>
  )
}

export default Footer