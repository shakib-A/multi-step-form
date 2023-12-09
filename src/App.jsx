import React, { useState } from 'react'
import { StepOne, StepTwo, StepThree, StepFour } from './components/steps'
import Navigation from './components/Navigation'

const App = () => {

  const [plans, setPlans] = useState([
    {
      id: 0,
      planName: 'arcade',
      icon: 'bg-Arcade',
      price: '$9/mo',
      isSelected: true
    },
    {
      id: 1,
      planName: 'advanced',
      icon: 'bg-Advanced',
      price: '$12/mo',
      isSelected: false
    },
    {
      id: 2,
      planName: 'pro',
      icon: 'bg-Pro',
      price: '$15/mo',
      isSelected: false
    },
  ])

  const [isMonthly, setIsMonthly] = useState(true)

  function handleSelectPlan(id) {
    const newPlans = plans.map((plan, index) => {
      if(index === id) {
        plan.isSelected = true
        return plan
      } else {
        plan.isSelected = false
        return plan
      }
    })
    setPlans(newPlans)
  }

  function handleChangeMonthly() {
    setIsMonthly(!isMonthly)
    //TODO: change the plan costs in plans state
  }


  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start bg-White top-0 mt-10 md:mt-0 md:h-[650px] md:w-[830px] md:p-3 md:pr-0 md:rounded-xl p-4 rounded-xl'>
        <Navigation />
      <div className='md:flex md:flex-col justify-start items-center md:h-full'>
        {/* <StepOne /> */}
        <StepTwo
          plans={plans}
          handleSelectPlan={handleSelectPlan}
          isMonthly={isMonthly}
          handleChangeMonthly={handleChangeMonthly}
        />
        {/* <StepThree />
        <StepFour /> */}
      </div>
    </div>
  )
}

export default App