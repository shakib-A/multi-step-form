import React from 'react'

const Navigation = () => {
  return (
    <>
      {/* mobile design */}
      <div className='w-full h-40 bg-Mobile bg-cover bg-no-repeat flex justify-center items-center gap-5 md:hidden'>
        <div className={`w-8 h-8 border-2 border-White rounded-full text-White flex justify-center items-center`}>1</div>
        <div className={`w-8 h-8 border-2 border-White rounded-full text-White flex justify-center items-center`}>2</div>
        <div className={`w-8 h-8 border-2 border-White rounded-full text-White flex justify-center items-center`}>3</div>
        <div className={`w-8 h-8 border-2 border-White rounded-full text-White flex justify-center items-center`}>4</div>
      </div>

      {/* desktop design */}
      <div className='hidden md:flex flex-col h-full justify-start items-start gap-10 pl-5 pt-5'>
        <div className='flex gap-4'>
          <div className={`text-White w-8 h-8 border-2 border-White rounded-full text-center leading-7 font-bold`}>1</div>
          <div className='text-White flex flex-col leading-4'>
            <h1 className='text-Coolgray'>STEP 1</h1>
            <p className='font-bold tracking-wider'>YOUR INFO</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className={`text-White w-8 h-8 border-2 border-White rounded-full text-center leading-7 font-bold`}>2</div>
          <div className='text-White flex flex-col leading-4'>
            <h1 className='text-Coolgray'>STEP 2</h1>
            <p className='font-bold tracking-wider'>SELECT PLAN</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className={`text-White w-8 h-8 border-2 border-White rounded-full text-center leading-7 font-bold`}>3</div>
          <div className='text-White flex flex-col leading-4'>
            <h1 className='text-Coolgray'>STEP 3</h1>
            <p className='font-bold tracking-wider'>ADD-ONS</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className={`text-White w-8 h-8 border-2 border-White rounded-full text-center leading-7 font-bold`}>4</div>
          <div className='text-White flex flex-col leading-4'>
            <h1 className='text-Coolgray'>STEP 4</h1>
            <p className='font-bold tracking-wider'>SUMMARY</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation