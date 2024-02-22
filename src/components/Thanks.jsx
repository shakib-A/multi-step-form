import React from 'react'
import thanksImg  from '../assets/images/icon-thank-you.svg'

const Thanks = () => {
  return (
    <>
        <div className='absolute w-[400px] bg-white top-24 left-[50%] translate-x-[-50%] flex flex-col justify-center gap-5 items-center py-20 rounded-lg p-2 drop-shadow-xlsm:static sm:inset-auto sm:translate-x-0 sm:flex-1 sm:flex sm:justify-start sm:self-start sm:drop-shadow-none sm:static sm:h-full'>
            <img src={thanksImg} alt="thank you" width={'100px'}/>
            <h1 className='font-bold text-2xl'>Thnak you!</h1>
            <p className='text-center text-Coolgray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, minima. Aliquam veritatis accusantium facilis sequi eveniet odio eius quos odit.</p>
        </div>
    </>
  )
}

export default Thanks