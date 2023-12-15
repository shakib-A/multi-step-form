import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Footer from './Footer'

const StepOne = ({ activePage, handleNextStep, handleGoBack }) => {

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required().typeError('please enter a valid phone number')
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = () => {
    console.log('sumbited')
    handleNextStep(0)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start md:h-full'>
      <h1 className='text-Marineblue font-bold text-2xl'>Personal info</h1>
      <p className='text-Coolgray'>please provide your name, email address, and phone number.</p>
      <div className='flex justify-between items-center w-full mt-5'>
        <label htmlFor="name" className='text-Marineblue font-bold'>name</label>
        {errors.name && <span className='text-Strawberryred text-sm tracking-tighter'>{errors.name.message}</span>}
      </div>
      <input {...register('name')} type="text" id="name" placeholder='e.g. Stephan Kink' className={`${errors.name ? 'focus:outline-Strawberryred border-2 border-Strawberryred' : 'border-2 outline-none'} w-full p-2 rounded-md`} />

      <div className='flex justify-between items-center w-full mt-5'>
        <label htmlFor="email" className='text-Marineblue font-bold'>Email Address</label>
        {errors.email && <span className='text-Strawberryred text-sm tracking-tighter'>{errors.email.message}</span>}
      </div>
      <input {...register('email')} type="text" id="email" placeholder='e.g. stephanking@lorem.com' className={`${errors.email ? 'focus:outline-Strawberryred border-2 border-Strawberryred' : 'border-2 outline-none'} w-full p-2 rounded-md`} />

      <div className='flex justify-between items-center w-full mt-5'>
        <label htmlFor="phone" className='text-Marineblue font-bold'>Phone Number</label>
        {errors.phone && <span className='text-Strawberryred text-sm tracking-tighter'>{errors.phone.message}</span>}
      </div>
      <input {...register('phone')} type="text" id="phone" placeholder='e.g. +1 234 567 890' className={`${errors.phone ? 'focus:outline-Strawberryred border-2 border-Strawberryred' : 'border-2 outline-none'} w-full p-2 rounded-md`} />

      <Footer 
        activePage={activePage}
        handleNextStep={handleNextStep}
        handleGoBack={handleGoBack}
      />
    </form>
  )
}

export default StepOne