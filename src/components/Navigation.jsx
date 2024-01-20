import React from 'react'

const Navigation = ({ activePage }) => {

  let active = activePage.filter((page) => {
    if(page.isActive) return true
  })


  return (
    <div className='absolute top-0 bg-Mobile w-screen h-full bg-contain bg-no-repeat -z-10 md:bg-Desktop md:w-[40%] md:h-full md:bg-contain md:z-0 md:relative'>
      {/* mobile design */}
      <div className='flex justify-center mt-10 gap-4 md:hidden'>
        <div className={`${active[0].id === 0 ? 'bg-Lightblue text-black' : 'text-Lightblue'} w-8 h-8 border-2 border-Lightblue rounded-full flex justify-center items-center `}>1</div>
        <div className={`${active[0].id === 1 ? 'bg-Lightblue text-black' : 'text-Lightblue'} w-8 h-8 border-2 border-Lightblue rounded-full flex justify-center items-center `}>2</div>
        <div className={`${active[0].id === 2 ? 'bg-Lightblue text-black' : 'text-Lightblue'} w-8 h-8 border-2 border-Lightblue rounded-full flex justify-center items-center `}>3</div>
        <div className={`${active[0].id === 3 ? 'bg-Lightblue text-black' : 'text-Lightblue'} w-8 h-8 border-2 border-Lightblue rounded-full flex justify-center items-center `}>4</div>
      </div>

      {/* desktop design */}
      <div className='hidden md:flex flex-col justify-start gap-8 pt-10 pl-10'>
        <div className='flex justify- gap-4'>
          <div className={`${active[0].id === 0 ? 'bg-Lightblue text-black' : 'text-Lightblue'} w-8 h-8 border-2 border-Lightblue rounded-full flex justify-center items-center`}>1</div>
          <div className='flex flex-col leading-none'>
            <h1 className='text-Coolgray uppercase'>step 1</h1>
            <h1 className='text-White uppercase font-bold tracking-wider'>your info</h1>
          </div>
        </div>

        <div className='flex justify- gap-4'>
          <div className={`${active[0].id === 1 ? 'bg-Lightblue text-black' : 'text-Lightblue'} w-8 h-8 border-2 border-Lightblue rounded-full flex justify-center items-center`}>2</div>
          <div className='flex flex-col leading-none'>
            <h1 className='text-Coolgray uppercase'>step 2</h1>
            <h1 className='text-White uppercase font-bold tracking-wider'>select plan</h1>
          </div>
        </div>

        <div className='flex justify- gap-4'>
          <div className={`${active[0].id === 2 ? 'bg-Lightblue text-black' : 'text-Lightblue'} w-8 h-8 border-2 border-Lightblue rounded-full flex justify-center items-center`}>3</div>
          <div className='flex flex-col leading-none'>
            <h1 className='text-Coolgray uppercase'>step 3</h1>
            <h1 className='text-White uppercase font-bold tracking-wider'>add-ons</h1>
          </div>
        </div>

        <div className='flex justify- gap-4'>
          <div className={`${active[0].id === 3  ? 'bg-Lightblue text-black' : 'text-Lightblue'} w-8 h-8 border-2 border-Lightblue rounded-full flex justify-center items-center `}>4</div>
          <div className='flex flex-col leading-none'>
            <h1 className='text-Coolgray uppercase'>step 4</h1>
            <h1 className='text-White uppercase font-bold tracking-wider'>summary</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation