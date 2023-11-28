import React from 'react'
import { useState } from 'react'

import { StepOne, StepTwo, StepThree, StepFour } from './components/steps'
import Navigation from './components/Navigation'
import Footer from './components/Footer'


const App = () => {

  const [steps, setSteps] = useState([
    {active: true},
    {active: false},
    {active: false},
    {active: false}
  ])

  function handleNextStep() {
    let activeIndex = 0
    for(let i = 0; i <= 3; i++) {
      if (steps[i].active) {
        activeIndex = i
        break
      }
    }
    if(activeIndex === 3) {return}
    setSteps(prev => [
      ...prev,
      steps[activeIndex].active = false,
      steps[activeIndex + 1].active = true
    ])
  }

  function handlePrevStep() {
    let activeIndex = 0
    for(let i = 0; i <= 3; i++) {
      if (steps[i].active) {
        activeIndex = i
        break
      }
    }
    if(activeIndex === 0) {return}
    setSteps(prev => [
      ...prev,
      steps[activeIndex].active = false,
      steps[activeIndex - 1].active = true
    ])
  }


  return (
    <div className='bg-Lightblue h-screen w-screen flex justify-start items-center flex-col'>
      <Navigation
        steps={steps}
      />
      <div className='z-10 w-[450px] bg-White rounded-xl mt-10 flex flex-col justify-center items-center md:w-[800px] md:h-[600px] md:relative'>
        <img src="/images/bg-sidebar-desktop.svg" className='hidden md:block md:absolute md:left-0' />
        {steps[0].active && <StepOne />}
        {steps[1].active && <StepTwo />}
        {steps[2].active && <StepThree />}
        {steps[3].active && <StepFour />}
      </div>
      <Footer
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    </div>
  )
}

export default App