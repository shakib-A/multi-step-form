import React from 'react'

const Navigation = ({steps}) => {


  return (
    <div className='flex gap-3 relative w-screen z-0 justify-center pt-16'>
      <img src="images/bg-sidebar-mobile.svg" alt="" className='absolute top-0 left-0 w-screen' />
      <div className='z-10 flex gap-8'>
        <div className={`border-2 w-10 h-10 flex items-center justify-center border-Lightblue ${steps[0].active ? 'text-black' : 'text-Lightblue'} ${steps[0].active ? 'bg-Lightblue' : 'bg-transparent'} font-bold rounded-full`}>1</div>
        <div className={`border-2 w-10 h-10 flex items-center justify-center border-Lightblue ${steps[1].active ? 'text-black' : 'text-Lightblue'} ${steps[1].active ? 'bg-Lightblue' : 'bg-transparent'} font-bold rounded-full`}>2</div>
        <div className={`border-2 w-10 h-10 flex items-center justify-center border-Lightblue ${steps[2].active ? 'text-black' : 'text-Lightblue'} ${steps[2].active ? 'bg-Lightblue' : 'bg-transparent'} font-bold rounded-full`}>3</div>
        <div className={`border-2 w-10 h-10 flex items-center justify-center border-Lightblue ${steps[3].active ? 'text-black' : 'text-Lightblue'} ${steps[3].active ? 'bg-Lightblue' : 'bg-transparent'} font-bold rounded-full`}>4</div>
      </div>
    </div>
  )
}

export default Navigation