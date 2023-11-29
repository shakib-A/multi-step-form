import React from 'react'

const StepOne = () => {
  return (
    <>
      {/* mobile design */}
      <form className='flex flex-col justify-center items-start'>
        <h1 className='text-Marineblue font-bold text-2xl'>Personal Info</h1>
        <p className='text-Coolgray'>Please provide your name, email address, and phone number.</p>
        <label htmlFor="name" className='mt-5'>Name</label>
        <input type="text" id="name" className='border-2 p-2 rounded-md w-full' />

        <label htmlFor="email" className='mt-5'>Email</label>
        <input type="email" id="email" className='border-2 p-2 rounded-md w-full' />

        <label htmlFor="phone" className='mt-5'>Phone Number</label>
        <input type="text" id="phone" className='border-2 p-2 rounded-md w-full' />
      </form>
    </>
  )
}

export default StepOne