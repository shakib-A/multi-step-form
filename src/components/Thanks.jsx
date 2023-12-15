import React from 'react'

const Thanks = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 py-20 md:p-0 md:h-full md:pl-10'>
      <div className='bg-Thanks bg-cover w-20 h-20'/>
      <h1 className='text-center font-bold text-3xl text-Marineblue'>Thank you!</h1>
      <p className='text-center text-Coolgray w-96'>
        Thanks for confirming your subscription!<br/>
        We hope you have fun using our platform.<br/>
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default Thanks