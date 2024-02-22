import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../myContext/myContext'
import { addOnsList, plansList } from '.'

const StepFour = () => {

  const navigate = useNavigate()
  const { state: { stepTwoValues: { planName, isMonthly }, stepThreeValues: { addOns } } ,dispatch } = useContext(myContext)
  
  const selectedAddOns = addOnsList.filter((element) => addOns.includes(element.title))
  const selectedPlan = plansList.find((element) => element.planName === planName)

  const calculateTotal = () => {
    let total = 0
    if(isMonthly){
      total += selectedPlan.planPrice
      for (let i = 0; i < selectedAddOns.length; i++) {
        total += selectedAddOns[i].price
      }
      return total
    }
     else {
      total += selectedPlan.planPrice
      for (let i = 0; i < selectedAddOns.length; i++) {
        total += selectedAddOns[i].price
      }
      return total * 10
    }
  }

  return (
    <>
    <div className='absolute w-[400px] bg-white top-24 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2 drop-shadow-xlsm:static sm:inset-auto sm:translate-x-0 sm:flex-1 sm:flex sm:justify-start sm:self-start sm:drop-shadow-none sm:static sm:h-full'>
      <h1 className='mt-2 font-bold text-xl text-Marineblue'>Finishing up</h1> 
      <p className='mt-1 mb-2 text-sm text-Coolgray'>Double-check everythinkg looks OK<br className='sm:hidden'/>before confirming.</p>

      <div className='flex flex-col gap-2 bg-Lightblue bg-opacity-35 p-2 rounded-md'>
         
        <div className='flex justify-start items-center border-b-2 pb-2'>
          <div>
            <h2>{`${planName} (${isMonthly ? 'Monthly' : 'Yearly' })`}</h2>
            <button onClick={() => navigate('/')} className='text-Coolgray underline hover:text-black'>change</button>
          </div>
          <h2 className='flex-grow text-right'>{isMonthly ? `$${selectedPlan.planPrice}/mo` : `$${selectedPlan.planPriceYearly}/yr`}</h2>
        </div>

        {selectedAddOns?.map((addOn, index) => {
            return <div key={index} className='flex justify-start items-center text-Coolgray'>
            <h2 className='capitalize'>{addOn.title}</h2>
            <h2 className='flex-grow text-right'>{isMonthly ? `+$${addOn.price}/mo` : `+$${addOn.price*10}/yr`}</h2>
          </div>
        })}

        <div className='flex justify-start items-center mt-4'>
          <h2 className=' text-Coolgray'>{`Total (per ${isMonthly ? 'Month' : 'Year'})`}</h2>
          <h2 className='flex-grow text-right text-Purplishblue font-bold'>{`+$${calculateTotal()}/${isMonthly ? 'mo' : 'yr'}`}</h2>
        </div>
        
        <button  onClick={() => navigate('/stepThree')} className='hidden px-2 py-2 rounded-md sm:block absolute bottom-3 left-3'>go back</button>
        <button  onClick={() => navigate('/thanks')} className='hidden bg-Marineblue text-white px-2 py-2 rounded-md sm:block absolute bottom-3 right-3'>Confirm</button>
      </div>
    </div>
      <div className='absolute bottom-0 bg-white w-screen flex justify-between px-2 py-4 sm:hidden'>
        <button onClick={() => navigate('/stepThree')}>go back</button>
        <button onClick={() => navigate('/thanks')} className='bg-Marineblue text-white px-2 py-2 rounded-md'>Confirm</button>
    </div>
    </>
  )
}

export default StepFour