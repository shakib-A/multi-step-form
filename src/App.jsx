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

  const [addOns, setAddOns] = useState([
    {
      id: 0,
      isChecked: true,
      name:'Online sevice',
      description: 'Access to multiplayer games',
      price: '+$1/mo'
    },
    {
      id: 1,
      isChecked: true,
      name:'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo'
    },
    {
      id: 2,
      isChecked: true,
      name:'Customizable profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo'
    },
  ])

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

  function handleSelectAddOn(id) {
    let newAddOns = addOns.map((addOn, index) => {
      if(index === id){
        return {
          ...addOn,
          isChecked: !addOn.isChecked
        } 
      } else return addOn
    })
    setAddOns(newAddOns)
  }

  function handleChangeMonthly() {
    if(isMonthly) {
      let newPlans = plans.map((plan) => {
        return {
          ...plan,
          price: plan.price.replace('/mo', '0/yr') 
        }
      })
      setPlans(newPlans)
    } else {
      let newPlans = plans.map((plan) => {
        return {
          ...plan,
          price: plan.price.replace('0/yr', '/mo') 
        }
      })
      setPlans(newPlans)
    }
    setIsMonthly(!isMonthly)
  }


  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start bg-White top-0 mt-10 md:mt-0 md:h-[650px] md:w-[830px] md:p-3 md:pr-0 md:rounded-xl p-4 rounded-xl'>
        <Navigation />
      <div className='md:flex md:flex-col justify-start items-center md:h-full'>
        {/* <StepOne /> */}
        {/* <StepTwo
          plans={plans}
          handleSelectPlan={handleSelectPlan}
          isMonthly={isMonthly}
          handleChangeMonthly={handleChangeMonthly}
        /> */}
        {/* <StepThree 
          addOns={addOns}
          handleSelectAddOn={handleSelectAddOn}
        /> */}
        <StepFour
          plans={plans}
          addOns={addOns}
          isMonthly={isMonthly}
        />
      </div>
    </div>
  )
}

export default App