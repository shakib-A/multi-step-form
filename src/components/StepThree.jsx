import React from 'react'
import Footer from './Footer'

const StepThree = ({ addOns, handleSelectAddOn }) => {

  const addOnsList = addOns.map((addOn, index) => {
    return (
      <div key={index} onClick={() => handleSelectAddOn(addOn.id)} className={`flex justify-between items-center ${addOn.isChecked ? 'border-2 border-Purplishblue bg-Pastelblue bg-opacity-30' : 'border-2'} p-2 rounded-lg mt-5 cursor-pointer`}>
        <input type="checkbox" checked={addOn.isChecked} onChange={() => {}} className='appearance-none border-2 w-5 h-5 rounded-md checked:bg-Purplishblue mr-5' />
        <div className='mr-auto'>
          <h1 className='font-bold text-Marineblue'>{addOn.name}</h1>
          <h1 className='text-Coolgray'>{addOn.description}</h1>
        </div>
        <h1 className='text-Purplishblue'>{addOn.price}</h1>
      </div>
    )
  })


  return (
    <div className='flex flex-col md:w-[29rem] md:h-full'>
      <h1 className='text-Marineblue font-bold text-2xl'>Pick add-ons</h1>
      <h1 className='text-Coolgray'>Add-ons help enhance your gaming experience.</h1>
      {addOnsList}
      <Footer/>
    </div>
  )
}

export default StepThree