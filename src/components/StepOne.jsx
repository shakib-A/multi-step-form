import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../myContext/myContext'

const StepOne = () => {

  const { state, dispatch } = useContext(myContext)
  const navigate = useNavigate()
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    defaultValues: state.stepOneValues
  })


  const onSubmit = () => {
    dispatch({ 
    type: 'UPDATE_FIRST_FORM',
    payload: getValues()
  })
    navigate('/stepTwo')
  }

  return (
    <>
    <div className='absolute w-[400px] bg-white top-24 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2 drop-shadow-xlsm:static sm:inset-auto sm:translate-x-0 sm:flex-1 sm:flex sm:justify-start sm:self-start sm:drop-shadow-none sm:static sm:h-full'>
      <h1 className='mt-2 font-bold text-xl text-Marineblue'>Personal info</h1> 
      <p className='mt-1 mb-2 text-sm text-Coolgray'>Please provide your name, email<br className='sm:hidden'/> and phone number.</p>
      <form className='flex flex-col  h-full'>
        <div className='flex justify-between items-end'>
          <label htmlFor="name">Name</label>
          <p className='text-[12px] text-Strawberryred'>{errors.name?.message}</p>
        </div>
        <input type="text" id='name' className= {`border-2 ${errors.name ? 'border-Strawberryred' : 'border-Lightgray'} outline-none px-2 mb-2 rounded-md text-md`}
         {...register('name', { required: 'this field is required'})} />

        <div className='flex justify-between items-end'>
          <label htmlFor="email">Email Address</label>
          <p className='text-[12px] text-Strawberryred'>{errors.email?.message}</p>
        </div>
        <input type="email" id='email' className= {`border-2 ${errors.email ? 'border-Strawberryred' : 'border-Lightgray'} outline-none px-2 mb-2 rounded-md text-md`}
         {...register('email', {
          required: 'this field is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid format'
          }
          })} />

        <div className='flex justify-between items-end'>
          <label htmlFor="phone">Phone Number</label>
          <p className='text-[12px] text-Strawberryred'>{errors.phone?.message}</p>
        </div>
        <input type="text" id='phone' className= {`border-2 ${errors.phone ? 'border-Strawberryred' : 'border-Lightgray'} outline-none px-2 mb-2 rounded-md text-md`}
         {...register('phone', {
          required: 'this field is required',
          pattern: {
            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
            message: 'Invalid Phone Number format'
          }
          })} />
        {/* submit button for desktop design */}
        <button onClick={handleSubmit(onSubmit)} className='hidden bg-Marineblue text-white px-2 py-2 rounded-md sm:block absolute bottom-3 right-3'>Next Step</button>
      </form>
    </div>
    {/* submit button for mobile design */}
    <div className='absolute bottom-0 bg-white w-screen flex justify-end px-2 py-4 sm:hidden'>
      <button onClick={handleSubmit(onSubmit)} className='bg-Marineblue text-white px-2 py-2 rounded-md'>Next Step</button>
    </div>
  </>
  )
}

export default StepOne