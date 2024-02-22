import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addOnsList } from '.'
import { myContext } from '../myContext/myContext'

const StepThree = () => {


  const { state: { stepTwoValues: { isMonthly }, stepThreeValues }, dispatch } = useContext(myContext)
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: stepThreeValues
  })

  const navigate = useNavigate()

  const onSubmit = () => {
    dispatch({ 
      type: 'UPDATE_THIRD_FORM',
      payload: getValues()
     })
     navigate('/stepFour')
  }

  return (
    <>
      <div className='absolute w-[400px] bg-white top-24 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2 drop-shadow-xlsm:static sm:inset-auto sm:translate-x-0 sm:flex-1 sm:flex sm:justify-start sm:self-start sm:drop-shadow-none sm:static sm:h-full'>
        <h1 className='mt-2 font-bold text-xl text-Marineblue'>Pick add-ons</h1> 
        <p className='mt-1 mb-2 text-sm text-Coolgray'>Add-ons help enhance your gameing<br className='sm:hidden'/> experienc.</p>
        <form className='flex flex-col gap-3'>

          {addOnsList.map((addOn, index) => {
            return   <label key={index} className={`flex justify-start items-center border-2 p-3 leading-5 gap-3 rounded-md`}>
            <input type="checkbox" value={addOn.title} {...register('addOns')} className='w-4 h-4' />
            <div>
              <h2 className='font-bold text-Marineblue capitalize'>{addOn.title}</h2>
              <h2 className='text-xs text-Lightgray capitalize'>{addOn.description}</h2>
            </div>
            <h2 className='font-light text-sm text-Purplishblue text-right flex-grow'>{isMonthly ? `+$${addOn.price}/mo` : `+$${addOn.price * 10}/yr`}</h2>
          </label>
          })}

          {/* Desktop buttons */}
          <button onClick={() => navigate('/stepTwo')} className='hidden px-2 py-2 rounded-md sm:block absolute bottom-3 left-3'>go back</button>
          <button onClick={handleSubmit(onSubmit)} className='hidden bg-Marineblue text-white px-2 py-2 rounded-md sm:block absolute bottom-3 right-3'>Next Step</button>
        </form>

      </div>
      {/* Mobile buttons */}
      <div className='absolute bottom-0 bg-white w-screen flex justify-between px-2 py-4 sm:hidden'>
        <button onClick={() => navigate('/stepTwo')}>go back</button>
        <button onClick={handleSubmit(onSubmit)} className='bg-Marineblue text-white px-2 py-2 rounded-md'>Next Step</button>
    </div>
    </>
  )
}

export default StepThree