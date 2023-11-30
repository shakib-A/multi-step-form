import React, { useState } from 'react'

const StepTwo = ({ plan, selectPlan }) => {

  const [monthly, setMonthly] = useState(true)

  function handleRadioButton() {
    setMonthly(!monthly)
  }

  return (
    <div className='md:h-full md:flex md:flex-col'>
      <h1 className='text-Marineblue font-bold text-2xl'>Select your plan</h1>
      <p className='text-Coolgray'>you have the option of monthly or yearly</p>
        <div  className='flex flex-col gap-5 mt-5 md:flex-row md:h-[50%] md:w-[443px] md:justify-between'>
          <div id="plan-1" onClick={() => selectPlan('arcade', `${monthly ? '9/mo' : '90/yr' }`)} className={`cursor-pointer flex justify-start items-center gap-4 border-2 p-4 rounded-lg ${plan.planName === 'arcade' ? 'border-Purplishblue bg-Pastelblue' : 'border-2 bg-transparent'} bg-opacity-30 md:flex-col md:w-full md:items-start md:gap-12`}>
            <div id="icon" className='bg-Arcade w-10 h-10 bg-cover'/>
            <div id="plan-info">
              <h1 className='font-bold text-Marineblue'>Arcade</h1>
              <h1 className='text-Coolgray'>{monthly ? `$9/mo` : '$90/yr'}</h1>
            </div>
          </div>

          <div id="plan-2" onClick={() => selectPlan('advanced', `${monthly ? '12/mo' : '120/yr' }`)} className={`cursor-pointer flex justify-start items-center gap-4 border-2 ${plan.planName === 'advanced' ? 'border-Purplishblue bg-Pastelblue' : 'border-2 bg-transparent'} bg-opacity-30 p-4 rounded-lg md:flex-col md:w-full md:items-start md:gap-12`}>
            <div id="icon" className='bg-Advanced w-10 h-10 bg-cover'/>
            <div id="plan-info">
              <h1 className='font-bold text-Marineblue'>Advanced</h1>
              <h1 className='text-Coolgray'>{monthly ? `$12/mo` : '$120/yr'}</h1>
            </div>
          </div>

          <div id="plan-3" onClick={() => selectPlan('pro', `${monthly ? '15/mo' : '150/yr' }`)} className={`cursor-pointer flex justify-start items-center gap-4 border-2 ${plan.planName === 'pro' ? 'border-Purplishblue bg-Pastelblue' : 'border-2 bg-transparent'} bg-opacity-30 p-4 rounded-lg md:flex-col md:w-full md:items-start md:gap-12`}>
            <div id="icon" className='bg-Pro w-10 h-10 bg-cover'/>
            <div id="plan-info">
              <h1 className='font-bold text-Marineblue'>Pro</h1>
              <h1 className='text-Coolgray'>{monthly ? `$15/mo` : '$150/yr'}</h1>
            </div>
          </div>
          
          {/* mobile radio button */}
          <div id="year-month" className='flex justify-center gap-4 md:hidden'>
            <h1 className='font-bold text-Marineblue'>Monthly</h1>
            <button onClick={handleRadioButton} className={`w-12 bg-Marineblue rounded-full px-[6px] flex ${monthly ? 'justify-start' : 'justify-end'} items-center`}><div className='w-4 h-4 bg-White rounded-full'/></button>
            <h1>Yearly</h1>
          </div>
          
        </div>

        {/* desktop radio button */}
        <div id="year-month" className='hidden justify-center gap-4 md:flex md:mt-10'>
          <h1 className='font-bold text-Marineblue'>Monthly</h1>
          <button onClick={handleRadioButton} className={`w-12 bg-Marineblue rounded-full px-[6px] flex ${monthly ? 'justify-start' : 'justify-end'} items-center`}><div className='w-4 h-4 bg-White rounded-full'/></button>
          <h1>Yearly</h1>
        </div>
    </div>
  )
}

export default StepTwo