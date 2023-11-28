import React from 'react'

const StepOne = () => {


  return (
     <form className='flex flex-col w-full px-10 py-5'>
        <h1 className='font-extrabold text-2xl text-Marineblue'>Personal info</h1>
        <p className='text-Coolgray'>Please provide your name, email address, and phone number.</p>
        <label htmlFor="name" className='font-bold text-Marineblue mt-4'>Name</label>
        <input type="text" id="name" className='border-2 rounded-md p-2' placeholder='e.g. name' />

        <label htmlFor="email" className='font-bold text-Marineblue mt-4'>Email Address</label>
        <input type="email" id="email" className='border-2 rounded-md p-2' placeholder='e.g. example@gmail.com' />
        
        <label htmlFor="number" className='font-bold text-Marineblue mt-4'>Phone Number</label>
        <input type="text" id="number" className='border-2 rounded-md p-2' placeholder='e.g. +1 234 567 890' />
        
     </form>
  )
}

export default StepOne