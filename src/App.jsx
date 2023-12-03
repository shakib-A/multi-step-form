import React, { useState } from 'react'
import { StepOne, StepTwo, StepThree, StepFour } from './components/steps'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App = () => {

  const [steps, setSteps] = useState([
    {active: false},
    {active: true},
    {active: false},
    {active: false}
  ])

  const [monthly, setMonthly] = useState(true)

  const [plan, setPlan] = useState({
    planName: '',
    cost: ''
  })

  const [addOns, setAddOns] = useState([
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      cost: '+$1/mo',
      isChecked: false
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      cost: '+$2/mo',
      isChecked: false
    },
    {
      name: 'Customizable Profile',
      description: 'Custom theme on your Profile',
      cost: '+$2/mo',
      isChecked: false
    },
  ])

  function handleNextStep() {
    let activeIndex
    for(let i = 0; i <= 3; i++){
      if(steps[i].active) {
        activeIndex = i
        break
      }
    }
    if(activeIndex === 3) {return}
    setSteps(prev => [
      ...prev,
      steps[activeIndex + 1].active = true,
      steps[activeIndex].active = false,
    ])
  }

  function handleGoBack() {
    let activeIndex
    for(let i = 0; i <= 3; i++){
      if(steps[i].active) {
        activeIndex = i
        break
      }
    }
    if(activeIndex === 0) {return}
    setSteps(prev => [
      ...prev,
      steps[activeIndex - 1].active = true,
      steps[activeIndex].active = false,
    ])
  }


  function handleRadioButton() {
    if(monthly) {
      setMonthly(false)
      setPlan(prev => {
        let NewCost = prev.cost.replace('/mo', '0/yr')
        return {
          ...prev,
          cost: NewCost
        }
      })
    } else {
      setMonthly(true)
      setPlan(prev => {
        let NewCost = prev.cost.replace('0/yr', '/mo')
        return {
          ...prev,
          cost: NewCost
        }
      })
    }
  }
  
  
  function handleAddOnsChange(index) {
    let newAddOns = addOns.map((addOn, i) => {
      if(index === i) {
        return {
          ...addOn,
          isChecked: !addOn.isChecked
        }
      }
      return addOn
    })
    setAddOns(newAddOns)
  }

  function selectPlan(myPlan, myCost) {
    setPlan({planName: myPlan, cost: myCost})
    console.log(plan)
  }


  return (
    <>
      {/* mobile design */}
      <div className='flex flex-col justify-center items-center md:hidden'>
        <Navigation
          steps={steps}
        />
        <div className='w-[375px] flex flex-col justify-center items-center absolute top-32 bg-White rounded-lg p-4'>  
          {steps[0].active && <StepOne
           
          />}
          {steps[1].active && <StepTwo
             plan={plan}
             selectPlan={selectPlan}
             monthly={monthly}
             handleRadioButton={handleRadioButton}
          />}
          {steps[2].active && <StepThree
            addOns={addOns}
            handleAddOnsChange={handleAddOnsChange}
          />}
          {steps[3].active && <StepFour
            plan={plan}
            addOns={addOns}
            monthly={monthly}
          />}
        </div>
          <Footer
            handleNextStep={handleNextStep}
            handleGoBack={handleGoBack}
          />
      </div>

      {/* desktop design */}
      <div className='hidden md:flex h-screen justify-center items-center'>
        <div className='bg-White flex justify-center items-start gap-10 p-5 rounded-md'>
          <div className='w-[250px] h-[500px] bg-Desktop bg-cover bg-center bg-no-repeat rounded-md'>
            <Navigation
              steps={steps}
            />
          </div>
          <div className='flex flex-col justify-between items-center h-[495px]'>
            {steps[0].active && <StepOne

            />}
            {steps[1].active && <StepTwo
               plan={plan}
               selectPlan={selectPlan}
               monthly={monthly}
               handleRadioButton={handleRadioButton}
            />}
            {steps[2].active && <StepThree
              addOns={addOns}
              handleAddOnsChange={handleAddOnsChange}
            />}
            {steps[3].active && <StepFour
              plan={plan}
              addOns={addOns}
              monthly={monthly}
            />}
            <Footer
              handleNextStep={handleNextStep}
              handleGoBack={handleGoBack}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App