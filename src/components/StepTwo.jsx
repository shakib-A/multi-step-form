import React from 'react'
import Card from './Card'
import Footer from './Footer'
import Radio from './Radio'

const StepTwo = ({ plans, handleSelectPlan, isMonthly, handleChangeMonthly, activePage, handleNextStep, handleGoBack }) => {

  const cards = plans.map((plan, index) => {
    return <Card 
      key={index}
      planId={plan.id}
      planIcon={plan.icon}
      planName={plan.planName}
      planPrice={plan.price}
      isSelected={plan.isSelected}
      handleSelectPlan={handleSelectPlan}
    />
  })

  return (
    <div className='flex flex-col gap-4 md:h-full'>
      <h1 className='font-bold text-Marineblue text-3xl'>Select your plan</h1>
      <h1 className='text-Coolgray'>You have the option of monthly or yearly billing</h1>
      <div className='flex flex-col md:flex-row gap-4 md:mt-10'>
        {cards}
      </div>

      <Radio
        isMonthly={isMonthly}
        handleChangeMonthly={handleChangeMonthly}
      />
      <Footer
        activePage={activePage}
        handleNextStep={handleNextStep}
        handleGoBack={handleGoBack}
      />
    </div>
  )
}

export default StepTwo