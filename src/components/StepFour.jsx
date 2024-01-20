import React, { useContext } from 'react'
import Footer from './Footer'
import { footerContext } from '../App'

const StepFour = ({ plans, addOns, isMonthly }) => {

  const { handleNextStep } = useContext(footerContext)

  const selectedPlan = plans.filter((plan) => {
    if(plan.isSelected) {
      return plan
    }
  })

  const selectedAddOns = addOns.filter((addOn) => {
    if(addOn.isChecked) {
      return addOn
    }
  })

  const addOnsCost = selectedAddOns.map((addOn, index) => {
    return (
      <div key={index} className='flex justify-between mt-2'>
          <h1 className='text-Coolgray'>{addOn.name}</h1>
          <h1 className='text-Marineblue font-bold text-md'>{addOn.price}</h1>
        </div>
    )
  })

  const totalCost = () => {
    let number = /\d+/g
    let planCost = parseInt(selectedPlan[0].price.match(number)[0])
    let addOnsTotalCost = selectedAddOns.map((addOn) => {
      return parseInt(addOn.price.match(number)[0])
    })

    let addOnsTotalCostSum = 0
    for(let i = 0; i < addOnsTotalCost.length; i++) {
      addOnsTotalCostSum += addOnsTotalCost[i]
    }
    
    return addOnsTotalCostSum + planCost
  }

  return (
    <div className='flex flex-col md:h-full md:w-[29rem]'>
      <h1 className='text-Marineblue font-bold text-2xl'>Finishing up</h1>
      <h1 className='text-Coolgray'>Double-check everything looks OK begore confirming.</h1>
      <section className='flex flex-col md:h-full md:bg-Lightblue md:bg-opacity-30 rounded-sm p-2 mt-2'>
        <div className='flex justify-between items-center border-b-[1px] mb-2 pb-2'>
          <div>
            <h1 className='text-Marineblue font-bold'>{`${selectedPlan[0].planName} (${isMonthly ? 'monthly' : 'yearly'})`}</h1>
            <input 
              //this will set the second page as active page
              onClick={() => handleNextStep(0)} 
              type="button" 
              value="Change" 
              className='text-Coolgray underline cursor-pointer' />
          </div>
          <h1 className='text-Marineblue font-extrabold'>{selectedPlan[0].price}</h1>
        </div>

        {addOnsCost}

        <div className='flex justify-between mt-8'>
          <h1 className='text-Coolgray'>{`Total (${isMonthly ? 'per month' : 'per year'})`}</h1>
          <h1 className='text-Purplishblue font-extrabold'>{`+$${totalCost()}${isMonthly ? '/mo' : '/yr'}`}</h1>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default StepFour