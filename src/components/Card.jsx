import React from 'react'

const Card = ({ planId, planIcon, planName, planPrice, isSelected, handleSelectPlan }) => {

  return (
    <div  
    className={`${isSelected ? 'border-2 border-Purplishblue bg-Pastelblue bg-opacity-30' : 'border-2'} cursor-pointer p-4 flex justify-start items-center w-96 gap-5 rounded-xl md:flex-col md:items-start md:w-36 md:gap-16`}
    onClick={() => handleSelectPlan(planId)}
    >
        <div className={`${planIcon} w-10 h-10 bg-cover`}></div>
        <div>
            <h1 className='text-Marineblue font-bold'>{planName}</h1>
            <h1 className='text-Coolgray'>{planPrice}</h1>
        </div>
    </div>
  )
}

export default Card