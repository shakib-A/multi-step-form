import React from 'react'
import { StepOne, StepTwo, StepThree, StepFour } from './components/steps'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start bg-White top-0 mt-10 md:mt-0 md:h-[650px] md:w-[830px] md:p-3 md:pr-0 md:rounded-xl p-4 rounded-xl'>
        <Navigation />
      <div className='md:flex md:flex-col md:h-full'>
        {/* <StepOne /> */}
        <StepTwo />
        {/* <StepThree />
        <StepFour /> */}
      </div>
    </div>
  )
}

export default App