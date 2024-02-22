import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../myContext/myContext'
import { plansList } from '.'
import arcade from '../assets/images/icon-arcade.svg'
import pro from '../assets/images/icon-pro.svg'
import advanced from '../assets/images/icon-advanced.svg'

const StepTwo = () => {


  const { state: { stepTwoValues }, dispatch } = useContext(myContext)
  const { planName, isMonthly } = stepTwoValues

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: stepTwoValues
  })
  const navigate = useNavigate()

  const onSubmit = () => {
    dispatch({ 
      type: 'UPDATE_SECOND_FORM',
      payload: getValues()
     })
     navigate('/stepThree')
  }

  const iconSelector = (planName) => {
    switch(planName){
      case 'arcade':
        return arcade
      case 'pro':
        return pro
      case 'advanced':
        return advanced
    }
  }

  return (
    <>
      <div className='absolute w-[400px] bg-white top-24 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2 drop-shadow-xlsm:static sm:inset-auto sm:translate-x-0 sm:flex-1 sm:flex sm:justify-start sm:self-start sm:drop-shadow-none sm:static sm:h-full'>
        <h1 className='mt-2 font-bold text-xl text-Marineblue'>Select your plan</h1> 
        <p className='mt-1 mb-2 text-sm text-Coolgray'>you have the option of monthly or<br className='sm:hidden'/> yearly billing.</p>
        <form className='flex flex-col gap-3'>

          <div className='flex flex-col gap-3 sm:flex-row sm:h-[170px]'>
          {plansList.map((plan,index) => {
            return <label key={index} className={`${planName === plan.planName  ? 'border-Purplishblue bg-Pastelblue bg-opacity-15' : ''} flex gap-3 border-2 p-2 justify-start rounded-md sm:flex-col sm:flex-grow sm:justify-between`}>
            <img src={iconSelector(plan.planName)} alt={plan.planName} className='w-10 h-10' />
            <div className='flex flex-col'>
              <h2 className='capitalize'>{plan.planName}</h2>
              <h2 className='text-Coolgray'>{`$${isMonthly ? `${plan.planPrice}/mo` : `${plan.planPriceYearly}/yr`}`}</h2>
            <input type="radio" value={plan.planName} 
            onClick={() => dispatch({ type: 'UPDATE_SECOND_FORM', payload: {...stepTwoValues, planName: plan.planName} })} 
            {...register('planName')} 
            className={`appearance-none`} />
            </div>
          </label>
          })}

          </div>

          {/* radio button isMonthly */}
          <label className='flex gap-2 self-center sm:h-[70px] justify-center items-center'>
            <input type="checkbox" 
            onClick={() => dispatch({ type: 'UPDATE_SECOND_FORM', payload: {...stepTwoValues, isMonthly: !stepTwoValues.isMonthly} })}  
            {...register('isMonthly')} 
            className={`appearance-none`} />
            monthly
            <div className={`w-10 h-5 bg-Marineblue rounded-full flex ${isMonthly === true ? 'justify-start' : 'justify-end'} items-center px-[4px]`}>
              <div className='w-3 h-3 rounded-full bg-white'/>
            </div>
            yearly
          </label>

          {/* desktop Buttons */}
          <button onClick={() => navigate('/')} className='hidden px-2 py-2 rounded-md sm:block absolute bottom-3 left-3'>go back</button>
          <button onClick={handleSubmit(onSubmit)} className='hidden bg-Marineblue text-white px-2 py-2 rounded-md sm:block absolute bottom-3 right-3'>Next Step</button>
        </form>

      </div>
       {/* Mobile Buttons */}
      <div className='absolute bottom-0 bg-white w-screen flex justify-between px-2 py-4 sm:hidden'>
        <button onClick={() => navigate('/')}>go back</button>
        <button onClick={handleSubmit(onSubmit)} className='bg-Marineblue text-white px-2 py-2 rounded-md'>Next Step</button>
    </div>
    </>
  )
}

export default StepTwo