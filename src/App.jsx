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


  return (
    <div className='bg-Lightblue h-screen w-screen flex justify-start items-center flex-col'>
      <Navigation
        steps={steps}
      />
      <div className='z-10 w-[450px] bg-White rounded-xl mt-10 flex flex-col justify-center items-center'>
        {steps[0].active && <StepOne />}
        {steps[1].active && <StepTwo />}
        {steps[2].active && <StepThree />}
        {steps[3].active && <StepFour />}
      </div>
      <Footer />
    </div>
  )
}

export default App