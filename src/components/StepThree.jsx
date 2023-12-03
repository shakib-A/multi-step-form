import React, { useState } from 'react'

const StepThree = ({ addOns, handleAddOnsChange }) => {


  let checkLists = addOns.map((addOn, index) => {
    return <div key={index} className={`${addOn.isChecked ? 'border-2 border-Purplishblue bg-Pastelblue bg-opacity-30' : 'border-2'} flex justify-start items-center gap-4 p-4 m-2 rounded-xl`}>
        <input type="checkbox" checked={addOn.isChecked} onChange={()=> {handleAddOnsChange(index)}} id={index} className='appearance-none w-6 h-6 border-[1px] border-Coolgray rounded-md checked:before:content-["\2713"] checked:before:text-white checked:before:flex checked:before:justify-center checked:bg-Purplishblue' />
        <label htmlFor={index} className='font-bold text-Marineblue leading-none '>{addOn.name} 
        <br /><span className='text-Coolgray font-normal text-xs'>{addOn.description}</span></label>
        <p className='text-Purplishblue ml-auto'>{addOn.cost}</p>
      </div>
})


  return (
    <form className='flex flex-col'>
      <h1 className='font-bold text-Marineblue text-2xl'>Pick Add-ons</h1>
      <p className='text-Coolgray mb-5'>Add-ons help enhance your gaming experience</p>
      {checkLists}
    </form>
  )
}

export default StepThree