import React from 'react'
import { useForm } from 'react-hook-form'

const StepOne = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(watch("phone"));
  return (
    <>
      <form onSubmit={handleSubmit()} className='flex flex-col justify-center items-start'>
        <h1 className='text-Marineblue font-bold text-2xl'>Personal Info</h1>
        <p className='text-Coolgray'>Please provide your name, email address, and phone number.</p>
        <label htmlFor="name" className='mt-5'>Name</label>
        <input {...register("name",  {required: true})} type="text" id="name" name='name'  placeholder='e.g. Shakib Aghili' className={`${errors.phone ? 'border-2 border-Strawberryred outline-Strawberryred outline-2' : 'border-2'} p-2 rounded-md w-full`} />
        {errors.name && <span className='text-Strawberryred text-sm'>This field is required</span>}

        <label htmlFor="email" className='mt-5'>Email</label>
        <input {...register("email", {required: true})} type="email" id="email" name='email' placeholder='e.g. example@gmail.com' className={`${errors.phone ? 'border-2 border-Strawberryred outline-Strawberryred outline-2' : 'border-2'} p-2 rounded-md w-full`} />
        {errors.email && <span className='text-Strawberryred text-sm'>This field is required</span>}

        <label htmlFor="phone" className='mt-5'>Phone Number</label>
        <input {...register("phone", { required: true })} type="text" id="phone" name='phone' placeholder='e.g. +1 234 567 890' className={`${errors.phone ? 'border-2 border-Strawberryred outline-Strawberryred outline-2' : 'border-2'} p-2 rounded-md w-full`} />
        {errors.phone && <span className='text-Strawberryred text-sm'>This field is required</span>}

        <input type="submit" name="" id="" />
      </form>
    </>
  )
}

export default StepOne